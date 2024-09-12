---
title: 'Pensamientos sobre la Deuda Técnica'
seoTitle: 'Deuda técnica'
slug: 'technical-debt'
description: 'Un pequeño ensayo sobre la deuda técnica'
pubDate: '2024-09-10'
updatedDate: '2024-09-11'
tags: ["Otros"]
coverImage: './blog-placeholder-4.jpg'
---
## Introducción
A día de la publicación de este post llevo más de cinco años en el mundo laboral y el concepto que más me ha perseguido, ya sea en empresas
pequeñas de mi pueblo natal, punteras start ups de capitales o empresas internacionales, es el de **Deuda Técnica**. 

Cuando empiezas te tragas la narrativa de que es inevitable, que todo termina teniendo deuda y que acabas por tener que convivir con ella, pero en realidad se puede evitar o mitigar en gran medida.

## ¿Qué es la deuda técnica?

Empecemos por lo básico, definamos este concepto. Este término fue acuñado originalmente por el estadounidense [Ward Cunningham](https://es.wikipedia.org/wiki/Ward_Cunningham) en 1992. Cunningham es un desarrollador de software y se le atribuye la invención del primer software **wiki** además de ser uno de los 17 autores del **Manifiesto Ágil**.

> Enviar código por primera vez es como endeudarse. Un poco de deuda acelera el desarrollo siempre que se pague rápidamente con una reescritura. Los objetos hacen que el coste de esta transacción sea tolerable. El peligro ocurre cuando la deuda no se paga. Cada minuto dedicado a un código incorrecto cuenta como interés sobre esa deuda. Organizaciones enteras pueden paralizarse bajo la carga de la deuda de una implementación no consolidada o estandarizada.<br>
> — <cite>Ward Cunningam</cite>

En resumen, la deuda técnica es simplemente código viejo, desordenado u obsoleto y el problema con esto es que este código es tan antiguo o está tan mal escrito que te toma más tiempo entenderlo y trabajar con él, lo que disminuye tu eficiencia y pone en peligro la consistencia de la aplicación.

## ¿Es mala la deuda técnica?

Sí y no. 

¿Cómo que no? 

Vale, eso suena muy mal, es como ¿por qué motivos alguien pensaría que endeudar tu aplicación es algo bueno? Deja que me explique.

Al igual que la deuda bancaría, por ejemplo, la deuda técnica puede utilizarse tanto de forma positiva como negativa. 

La deuda puede ser un riesgo calculado, al igual que cuando adquirimos deuda para pagar la entrada de una casa. ¿Ves? No es tan malo. 

Pero casi siempre es el resultado de malas prácticas en el código, la herencia de malas decisiones en sprints pasados o la suma de ambos escenarios; al igual que una mala inversión que acaba por obligarnos a pedir un préstamo que acaba por endeudarnos más.

Tampoco quiero ponerme muy técnico y empezar a hablar del **Cuadrante de deuda de Fowler** o de los tipos de deuda de **Steve McConnell**, creo que con lo anterior se entiende bien así que vamos a lo interesante.

## ¿Como nos libramos de la deuda?

Yo no soy ninguna eminencia, ni pretendo serlo. Vengo a hablar desde mi corta experiencia y lo que, en muchos casos, se dice que hay que hacer, pero nunca se lleva a cabo.

Aquí es donde quiero dividir el resto del post en **Lo que se dice**, **Lo que se hace** y **Lo que me ha servido**.

## Lo que se dice

Las soluciones que se promulgan como el dogma para evitar la deuda técnica muchas veces pecan de idílicas. En un equipo donde todos documentamos, todos hacemos tests, todos seguimos los estándares más nuevos, todos programamos con las últimas tecnologías y donde nos dan los márgenes de tiempo más generosos que existen, estas serían las cinco claves para evitar o mitigar esta deuda que más me han repetido a lo largo de los años:

### 1. Dedica más tiempo
La forma más sencilla es simplemente dedicar más tiempo. Si pasas de dedicar 10 horas a 20 horas en una función, es casi seguro que la función terminará mejor y dejará menor deuda técnica.

### 2. Haz tests
La siguiente forma más sencilla de reducir la deuda técnica es escribir más Tests. Esto añade tiempo adicional, pero todo dependerá del tamaño del código. Estas pruebas harán que cambiar el código sea mucho más fácil en el futuro, ya que si algo se rompe accidentalmente, las pruebas lo detectarán de inmediato.

### 3. Deja el código mejor de lo que te encontraste
Probablemente, encontrarás deuda técnica mientras trabajas. Este es el momento perfecto para invertir un poco de tu tiempo en hacer pequeños cambios que mejoren el código y reduzcan la deuda técnica un poco. Esto podría ser tan simple como añadir algunos test a un fragmento de código que no las tiene, o hacer algo de refactorización para mejorar los nombres de funciones y variables.

### 4. Refactorizaciones Periódicas
A veces, la deuda técnica se vuelve tan grande que detiene el progreso y te impide hacer los cambios que deseas. Cuando esto sucede, a veces la única solución es detener el desarrollo de nuevas funciones y limpiar la deuda técnica. A diferencia de la técnica anterior, estos cambios serán de gran alcance y tomarán un tiempo significativo.

### 5. Documentar
Este tendría que ser el dogma de todo programador, **Funcionalidad creada, Funcionalidad documentada**. Es nuestra responsabilidad no hacer caso a la voz en nuestra cabeza que nos repite que en unos meses te acordaras de lo que has programado hoy, no lo redactaras y luego invertirás tiempo en entender que hiciste para poder seguir programando o poder cambiarlo. Invierte tiempo en documentar que es lo que hace tu código.

## Lo que se hace
Vale, hemos llegado a la parte que se basa exclusivamente en mi experiencia personal, donde se ha comulgado bajo esos 5 dogmas, pero donde siempre se repiten las mismas frases: **No tenemos tiempo para hacer esto**, **La fecha de entrega es muy apretada**, **Ya volveremos cuando tengamos tiempo**. Y no es por dármelas de mega programador, ni mucho menos, pero muchas veces la mala gestión de los tiempos viene dada por una enorme deuda y a su vez por la incompetencia del encargado de gestionar los tiempos y la poca comunicación entre este y el equipo técnico. Siempre es culpa del **P.O** (Es broma ¿O no lo es?)
![meme](./meme.gif)

### 1. Dedica más tiempo
No se puede dedicar más tiempo si nunca hay tiempo. 

Muchas veces la persona encargada de esta funcionalidad hereda una deuda que le impide invertir el tiempo necesario para hacer bien este código, y otras muchas veces, casi siempre en mi experiencia, no hay documentación que guie al desdichado por la jungla de funciones que tiene que usar para poder hacer esta nueva funcionalidad.

### 2. Haz tests
Volvemos a tener el mismo problema ¿Con qué tiempo? 

En mi experiencia, pocas empresas cuentan con equipos dedicados a hacer tests y muchas menos dan el tiempo necesario a los desarrolladores para poder hacer tests de sus funcionalidades.

### 3. Deja el código mejor de lo que te encontraste
Esta es mi preferida. Pídele al chaval, que lleva 3 meses, que toque un código de hace 10 años y que se deje ese código, escrito en Sánscrito, mejor de lo que se lo encontró. 

Da gracias que ese chaval entienda siquiera como implementar ese bloque de 1000 líneas con variables como **aaa** o **doAThing**, sin documentar y sin tests.

### 4. Refactorizaciones Periódicas
Aquí seré rápido: **No tendría que ser necesario una refactorización tan masiva si invirtieseis tiempo en hacer bien los sprints**.

Yo enseñándole las planificaciones irreales al jefe que comenta siempre que tenemos que invertir mas tiempo en refactorizar y tener mejor código:
![meme](./meme2.gif)


### 5. Documentar
Este es siempre el eterno marginado de todos los proyectos grandes, con deuda y faltos de tiempo y dirección adecuada. Nadie excusará que el programador no documente, siempre se puede documentar, pero se entiende que muchos reúsen en hacerlo, pues para ello tienen que documentar ese código de hace décadas que nadie ha entendido nunca y que hizo un extrabajador borracho a las 4 de la mañana. 

Y al final es tiempo que hay que invertir y, repetid conmigo: **No hay tiempo**.

## Lo que me ha servido
No vamos a ser tan negativos y, por experiencia, siempre podemos hacer algo para mitigar, de forma realista, esta deuda. 

Lo primero que tenemos que hacer es olvidar estos dogmas, no todos podemos hacerlo todo y no siempre hay tiempo para todo. Vamos a cambiar los 5 puntos anteriores por prácticas menos idealistas:

### 1. Nada de Dedica más tiempo y Refactorizaciones Periódicas. Equipo de deuda técnica.
No digo que esas dos cosas no sean necesarias, pero si quieres que las cosas salgan (hablo contigo, encargado/P.O) o les das el tiempo necesario para que eso sea posible o inviertes en profesionales que se dediquen a reducir esta deuda. 

¿Y donde estan esos profesionales?

Tu propio equipo de desarrolladores. Dedica a parte de tu equipo cada sprint en reducir la deuda. Rota a estos profesionales para evitar que se quemen las retinas de tanto codigo putrefacto y crea unos estandares para que todos usen unos principios a la hora de refactorizar.

### 2. Haz tests, pero invierte en un equipo de Testers
No obligues a los desarrolladores a testear, ya que no tienen tiempo para hacerlo, invierte en profesionales que se dediquen íntegramente a hacerlo.

Cada programador tiene la obligacón de testear su codigo en la medida que conoce que es lo que hace, pero con una visón de tunel es dificil cubrir todos los escenarios por donde puede explotar una funcionalidad.

### 3. Deja el código mejor de lo que te encontraste
Aquí rompo una lanza a favor de las posturas idealistas y siempre, en la medida de lo posible, hay que intentar dejar el código mejor de lo que lo encontraste, pero con cabeza y con la aprobación de profesionales con más experiencia que la tuya.

### 5. Documentar
Por DIOS, documentad. SIEMPRE. Pide el tiempo que haga falta, pero documentad. Aquí no hay excusa. Si no puedes documentar las funciones que no has creado tú (comprensible y nadie te juzgará por ello) documenta tu código y explica que estás usando bloques o funciones legacy poco claras.


## Conclusión
En definitiva, la deuda técnica no es mala per se si se gestiona con cabeza, pero seamos realistas, muy pocas veces escuchas deuda técnica y re alegras de oírlo. 

Una de las maneras de controlar la deuda técnica es crear conciencia sobre esta, tanto por los que gestionan los productos, como en los equipos de desarrollo de software. Nada de dogmas idealistas que prometen rescatar tu engendro de código que respira a duras penas desde los 90. Entiende tu aplicación y a tu equipo, crea roles para gestionar esta deuda y genera el hábito para producir un código, una documentación y unos tests que minimicen escenarios donde se generen funcionalidades que nos lleven a que nuestro producto no pueda seguir creciendo.

Buah, me ha quedado muy largo esto. Si has llegado hasta aquí, gracias, aquí te dejo una canción:

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2p5LjvjZlMSxxwNUtDyG5x?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>