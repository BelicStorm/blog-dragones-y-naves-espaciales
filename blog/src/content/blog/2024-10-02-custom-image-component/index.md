---
title: 'React y la carga de imágenes - Componente custom'
seoTitle: 'React y la carga de imágenes - Componente custom'
slug: 'custom-image-component'
description: 'Un pequeño componente para ayudarnos con la carga de imagenes'
pubDate: '2024-10-02'
updatedDate: '2024-10-02'
tags: ["React", "Component"]
coverImage: './blog-placeholder-2.jpg'
---
Las imágenes son una parte crucial del rendimiento de una web. Sin embargo, integrarlas y gestionarlas en una aplicación React puede presentar desafíos como tiempos de carga lentos, imágenes rotas y la gestión dinámica de rutas de imágenes, y esos desafíos pueden convertirse en problemas muy rápido, como el **Flashing and flickering content**, si no sabemos como gestionarlo.

Para abordar estos problemas, crearemos un componente personalizado que encapsulará el manejo de los estados de carga, errores y la gestión dinámica de rutas de manera fluida e indolora.

## Gestor de Rutas

La función **getFullImagePath** tiene como propósito principal concatenar una URL base (usualmente el dominio o ruta principal donde se almacenan las imágenes, como un servidor o un bucket en la nube) con un camino relativo de imagen proporcionado. Esto asegura que siempre se obtenga una URL válida y completa para cargar la imagen.

``` ts

interface imagePathParams {
	path?:string
}

export function getFullImagePath({path = ""}:imagePathParams) {
    try {
        const BaseUrl = process.env.REACT_BASE_URL;
        
        // Verificar si la URL base no está vacía o nula
        if (!BaseUrl || typeof BaseUrl !== 'string') {
            throw new Error("Base URL is invalid");
        }
        // Eliminar la barra al final de la URL base si está presente
        const cleanBaseUrl = BaseUrl.replace(/\/$/, '');

        // Verificar si el camino está vacío o es nulo
        if (!path || typeof path !== 'string') {
            throw new Error("Path is invalid");
        }

        // Devolver la URL concatenada
        return cleanBaseUrl + (path.startsWith('/') ? path : '/' + path);
    } catch (error) {
        // Manejar el error de manera adecuada
        return "";
    }
}

```

### Desglose del código:

#### 1. **Parámetro de entrada (path)**
- path es el camino relativo o parte final de la URL de la imagen. El valor por defecto es una cadena vacía (""), para evitar que se pase un valor indefinido si no se proporciona uno.
#### 2. **Obtener la URL base (BaseUrl)**
- **BaseUrl** se obtiene desde una variable de entorno llamada que debería contener la URL base del servidor o servicio donde se almacenan las imágenes.
#### 3. **Validación de la URL base**
- La función primero verifica si **BaseUrl** está definida y es una cadena válida. Si **BaseUrl** es **null**, **undefined**, o no es una cadena válida, lanza un error.
#### 4. **Eliminar la barra final de la URL base**
- Utilizamos una expresión regular para eliminar una barra (/) al final de BaseUrl en caso de que esté presente para evitar que haya doble barra (//) al concatenar la URL base con el camino relativo de la imagen.
#### 5. **Concatenación de la URL base y el camino**
- El paso clave es la concatenación de la URL base con el camino proporcionado:
- Comprobar si **path** comienza con **/**: Si el camino ya comienza con una barra (/), se concatena directamente a **cleanBaseUrl**. Si no comienza con una barra, se añade una barra antes de concatenarlo. Esto asegura que la URL final sea válida y esté bien formateada.
- Por ejemplo:
	- Si cleanBaseUrl es https://mi-servidor.com y path es /imagenes/foto.jpg, el resultado será https://mi-servidor.com/imagenes/foto.jpg.
    - Si cleanBaseUrl es https://mi-servidor.com y path es imagenes/foto.jpg, la función añade la barra y devuelve https://mi-servidor.com/imagenes/foto.jpg.

## Componente ControlledImage
Este componente implementa la función **getFullImagePath** para ayudarnos con las rutas de las imágenes pero su principal función es la de saber si la imagen ha sido totalmente cargada o no, si esta tiene errores y evitar que visualmente estos cambios afecten a la experiencia de usuario.

```ts
interface CustomImageProps {
    addBaseUrl?:boolean,
    src:string,
    alt:string,
    className:string,
    loadingImg?:string
}
const ControlledImage = ({ 
	src, addBaseUrl = false, alt, className, loadingImg 
}:CustomImageProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  // Dynamically manage image path with base URL if required
  const formatedSrc = addBaseUrl ? getFullImagePath(src) : src;
  const loadingImage = loadingImg ? loadingImg : "https://placehold.co/600x400?text=loading..."
  const errorImage = error ? "https://placehold.co/600x400?text=Image\n+not+Found" : ""

  return (
    <img
      src={error ? errorImage : loading ? loadingImage : src}
      alt={error ? 'Error' : alt}
      loading='lazy'
      className={className}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
};

export default ControlledImage;
```

### Desglose del código:
#### 1. **Definición del componente**
- El componente recibe varias **props**: src, addBaseUrl, alt, className y loadingImg .
    - **src**: La fuente o ruta de la imagen. 
    - **addBaseUrl**: Un booleano que determina si se debe agregar una URL base.
    - **alt**: Texto alternativo para la imagen.
    - **loadingImg**: Ruta de la imagen que cargara en caso de estar en estado de carga
#### 2. **Manejo de estado**
- El componente maneja los estados clave de la siguiente forma:
    - **loading**: Este estado empieza como true y se utiliza para determinar si la imagen todavía está cargando.
    - **error**: Este estado empieza como false y se utiliza para indicar si ocurrió un error al cargar la imagen.
#### 3 **Funciones de manejo de eventos**
- Hay dos funciones definidas para actualizar los estados en función de los eventos de la imagen:
    - **handleLoad**: Se ejecuta cuando la imagen ha cargado correctamente. Cambia el estado loading a false para indicar que la imagen ya está lista.
    - **handleError**: Se ejecuta cuando hay un problema al cargar la imagen (por ejemplo, si la ruta es incorrecta). Cambia el estado loading a false y el estado error a true para indicar que la carga ha fallado.
#### 4. **Manejo dinámico de la URL de la imagen**
- Si addBaseUrl es true, la guardaremos dentro de la constante formatedSrc el resultado de la función getFullImagePath para obtener la URL base con el src proporcionado. Si no, se guardara el src tal cual.
#### 5. **Renderizado condicional de la imagen**
- El atributo src de la etiqueta img se determina así:
    - Si hubo un error, se muestra una imagen de marcador de posición que dice "Image not Found".
    - Si la imagen aún está cargando, se muestra una imagen proporcionada por props o la por defecto para indicar que está cargando.
    - Si la imagen se cargó correctamente, se muestra la imagen.
    - El atributo alt también cambia dependiendo de si hubo un error. Si hay un error, el texto alternativo será "Error". De lo contrario, se usa el texto alt proporcionado.
#### 6. **Propagación de eventos (onLoad y onError)**
- El componente se asegura de manejar los eventos de carga y error de la imagen:
    - **onLoad**: Cuando la imagen se carga con éxito, dispara la función handleLoad.
    - **onError**: Si ocurre un error al cargar la imagen (por ejemplo, la ruta no es válida), se llama a handleError.

### Ejemplo de uso del componente:

Este es un ejemplo de cómo se podría usar el componente **ControlledImage** en una aplicación:
```js
<ControlledImage src={imageURL} alt={id} className="img" loadingImg={LoadingImage}/>
```

En este caso, imageURL la URL de la imagen del perfil del usuario, y al carecer de addBaseUrl aseguramos que la URL base no es necesaria.

## Conclusión

Crear un componente como este nos ofrece una solución robusta, que no perfecta pues podríamos ahondar mucho mas en otros aspectos, para manejar la carga y errores de las imágenes de nuestra app. Su simplicidad nos permite reemplazar fácilmente las etiquetas <img> existentes. Como resultado obtenemos una mejora en la experiencia del usuario y simplificamos la integración de imágenes.

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0cyQuiFTVaHM70y8xRsOWA?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>