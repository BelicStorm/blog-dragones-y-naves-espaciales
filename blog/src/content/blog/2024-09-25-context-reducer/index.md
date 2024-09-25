---
title: 'React 18: Contexto y Reducers [Lo básico]'
seoTitle: 'React 18: Contexto y Reducers [Lo básico]'
slug: 'react18-context-reducers'
description: 'Lo básico sobre los contextos y los reducers en react 18'
pubDate: '2024-09-25'
updatedDate: '2024-09-25'
tags: ["React"]
coverImage: './blog-placeholder-2.jpg'
---
## Introducción
Uno de los principales retos al crear aplicaciones con React es la **gestión del estado**. Si bien existen librerías populares como **Zustand**, **Recoil** o **Redux** (creada por Dan Abramov y el equipo de React), no siempre son necesarias para resolver todos los problemas de estado.

En 2016, Dan Abramov hizo una declaración importante sobre el uso de Redux:

> "No uséis Redux hasta que tengáis problemas con React. Redux es más útil en escenarios donde: **Tienes grandes cantidades de estados que se necesitan en muchos lugares a la vez**. Redux hace que las cosas más simples sean estúpidamente complicadas, por eso me niego a usarlo."

Con la evolución de React, desde la versión 16 (basada en clases) a la versión 17 (basada en funciones y hooks), surgió una herramienta integrada llamada **Context** para manejar el estado global sin la complejidad de Redux.

## Context, useContext y Porviders

El **Context** en React es una API que permite compartir valores a lo largo de la aplicación sin tener que pasar props manualmente a través de todos los niveles del árbol de componentes.

Para crear un contexto, se utiliza **React.createContext()**:

```js
const MyContext = React.createContext();
```
 
 ¿Y como usamos esta api dentro de nuestros componentes? Con **useContext** y un **Provider**

El **useContext** es un hook, como **useState** o **useReducer** (de este hablaremos mas tarde) que facilita el acceso a los valores de un contexto sin necesidad de utilizar el patrón de render props, lo que mejora la simplicidad y legibilidad del código.

```js
const {value, setValue} = useContext(MyContext);
```

El **Provider** es un componente que envuelve a los componentes hijos y permite que compartan un valor proporcionado desde cualquier parte del árbol de componentes. Sin un Provider, **useContext** no tendría un valor que proporcionar a los componentes.

```js
const MyProvider = ({ children }) => {
  const [value, setValue] = useState('some value');
  
  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

```

Todo junto nos quedaría algo como esto:
```jsx
import React, { useContext, useState } from 'react';
//Creamos el contexto
const MyContext = React.createContext();

//Creamos el Proveedor del contexto y el estado que lo mantiene
const MyProvider = ({ children }) => {
  const [value, setValue] = useState('some value');
  
  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

//Usamos este contexto en el componente que lo necesite
const MyComponent = () => {
  const {value, setValue} = useContext(MyContext);
  
  return (
	  <div>
		  {value}
	  </div>
  );
};

//Envolvemos a los componentes que necesiten este contexto con su proveedor
const App = () => {
  return (
	  <MyProvider>
		<MyComponent/>
	  </MyProvider>
  );
};

```


## Reducers y useReducer

Cuando la lógica de estado de tu aplicación se vuelve más compleja, como cuando múltiples transiciones o dependencias afectan al estado, **useState** puede no ser suficiente. Aquí es donde entran los **Reducer**.


Un **reducer** es una función que toma el estado actual y una acción, y devuelve un nuevo estado. Esto es especialmente útil cuando la lógica para actualizar el estado es más compleja que simplemente asignar un nuevo valor.

Con el hook **useReducer** entramos a una situación similar a cómo se actua en Redux, donde tienes un "reducer" que define cómo cambiará el estado en respuesta a las acciones. Dentro de este Patron encontramos: 

1. Un **reducer**: una función que recibe el estado actual y una acción, y devuelve un nuevo estado.
2. Un **estado inicial**: el valor inicial del estado.

Ejemplo básico de **useReducer**:

```jsx
import React, { useReducer } from 'react';

//Creamos el estado por defecto de nuestro contador
const initialState = { count: 0 };

//En el reducer creamos las acciones que modifican nuestro estado y como lo modifican
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

//Creamos el componente que necesitara de esta gestion del estado
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

```

En este ejemplo, **useReducer** maneja el estado del contador, y **dispatch** es una función que dispara acciones para cambiar ese estado.

## Reducers y contextos

La verdadera magia ocurre cuando combinas **useReducer** con **Context** para manejar el estado global de una manera estructurada y eficiente. Esto te permite crear un sistema de gestión de estado similar a Redux, pero sin la sobrecarga adicional de configurar una librería externa.

``` jsx
import React, { useReducer, createContext, useContext } from 'react';

// Estado inicial
const initialState = { count: 0 };

// Reducer
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Crear el contexto
const CounterContext = createContext();

// Proveedor del contexto
const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// Componente que consume el contexto
const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

// Uso del Proveedor en el árbol de componentes
const App = () => (
  <CounterProvider>
    <Counter />
  </CounterProvider>
);

export default App;

```

### Beneficios de combinar Reducers y Context:

1. **Estructura clara y escalable**: **useReducer** centraliza la lógica de cambio de estado.
2. **Reutilización de lógica**: Puedes mover la lógica entre componentes sin duplicar código.
3. **Gestión compleja del estado**: Ideal cuando tienes múltiples acciones que afectan al estado.

Es importante recordar que en casos sencillos, como el ejemplo del contador, usar reducers o contextos puede ser innecesario, ya que un simple **useState** podría manejar el estado de forma más eficiente. Usar herramientas como **useReducer** sin una necesidad real puede llevar a sobrecomplicar la aplicación y generar problemas de rendimiento.

## Conclusión
El **Context**, junto con **useReducer**, **useContext**, y el patrón **Provider**, proporciona una forma poderosa y eficiente de gestionar estados complejos en React sin depender de librerías externas como Redux. Sin embargo, es crucial usar estas herramientas de manera inteligente, evitando sobrecomplicar la aplicación en casos donde **useState** sería más adecuado.

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1iv0Expr4TzDnx62w60oqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
