import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//EXPLICACION DE ALGUNAS LINEAS DE CODIGO:

/*import React from 'react'; es una línea de código en JavaScript
                             que se utiliza en proyectos de React. Esta línea hace lo siguiente:

                            Importar el Módulo React: Trae la biblioteca React al archivo actual,
                            lo que permite utilizar las funcionalidades de React.

                            Punto de Entrada: React es el objeto principal de la biblioteca, 
                            y es necesario para poder crear componentes de React, manejar el estado
                            y los ciclos de vida, y usar JSX (una extensión de sintaxis para escribir HTML en JavaScript).
                            En resumen, esta línea es esencial para cualquier archivo que use React,
                            permitiendo acceder a todas las funcionalidades que ofrece la biblioteca. */


/*import ReactDOM from 'react-dom/client'; es una línea de código en JavaScript 
                                           que se utiliza en proyectos de React. Aquí tienes una explicación breve:

                                          -Importar el Módulo ReactDOM: Trae la funcionalidad de ReactDOM al archivo actual.

                                          -react-dom/client: Especifica que estamos importando desde el módulo react-dom 
                                            y accediendo al submódulo client, que contiene las herramientas 
                                            para interactuar con el DOM del navegador en aplicaciones modernas de React.

                                          ReactDOM se utiliza para manipular el DOM, y en particular, 
                                          para renderizar componentes React en la página web. 
                                          La forma moderna con react-dom/client es usada en React 18 
                                          y versiones posteriores para inicializar y gestionar la raíz de la aplicación de manera eficiente. */


/*import App from './App'; es una línea de código en JavaScript utilizada en proyectos de React. Aquí tienes una explicación breve:

                           Importar un Componente o Módulo: Esta línea importa el módulo o componente App desde un archivo App.js (o App.jsx).
                           Ruta Relativa: ./App indica que el archivo App se encuentra en el mismo directorio que el archivo actual.
                           En resumen, esta línea permite que uses el componente o el módulo App en el archivo actual, 
                           haciendo que sus funcionalidades estén disponibles para ser utilizadas, como renderizarlo en el DOM. */

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


- document.getElementById('root'): Selecciona el elemento del DOM con el id root.

- ReactDOM.createRoot(...): Crea una raíz de React en el elemento seleccionado, preparándola para renderizar contenido.

- root.render(...): Renderiza el contenido dentro de la raíz creada.

- <React.StrictMode>: Envuelve el componente App para activar verificaciones adicionales y advertencias en el modo de desarrollo.

-<App />: El componente principal de la aplicación que se va a renderizar.

En resumen, este código inicializa la aplicación React y renderiza el componente principal App en el elemento con el id root del DOM.

Este código inicializa la aplicación React y renderiza el componente principal App en el elemento con el id root del DOM, 
aplicando el modo estricto de React que activa verificaciones adicionales para mejorar la calidad del código. */