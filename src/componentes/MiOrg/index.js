import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    //useState
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)
    console.log(props)
    //const [mostrar, actualizarMostrar] = useState(true)
    //const manejarClick = () => {
    //    console.log("Mostrar/Ocultar elemento", !mostrar)
    //    actualizarMostrar(!mostrar)
    //}
    console.log('props: ',props)

    return <section className="orgSection">
        <h3 className="title">Mi organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg



//USESTATE DEFINICION: 
/* useState => es un hook en React que permite añadir estado local a los componentes funcionales. 
Antes de los hooks, el estado solo podía ser gestionado en componentes de clase, 
pero con useState, los componentes funcionales también pueden tener y manejar estado.

Cómo se usa useState

1.-Importar useState:

import React, { useState } from 'react';

2.-Inicializar un estado:

const [estado, setEstado] = useState(valorInicial);

 - estado es la variable que contiene el valor del estado actual.
 - setEstado es la función que se utiliza para actualizar el estado.
 - valorInicial es el valor inicial del estado.

Ejemplo Completo
Aquí tienes un ejemplo de un componente funcional que utiliza useState para gestionar el estado de un contador:

import React, { useState } from 'react';

const Contador = () => {
  // Inicializa el estado 'contador' con el valor 0
  const [contador, setContador] = useState(0);

  // Función para incrementar el contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  // Función para decrementar el contador
  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
};

export default Contador;


Explicación del Ejemplo

1.-Importación de useState:

import React, { useState } from 'react';

2.-Inicialización del Estado:

const [contador, setContador] = useState(0);

 -contador es la variable de estado que contiene el valor del contador.
 -setContador es la función utilizada para actualizar el valor de contador.
 -0 es el valor inicial del contador.

3.-Funciones para Actualizar el Estado:

    -Incrementar:

    const incrementar = () => {
    setContador(contador + 1);
    };

    -Decrementar:

    const decrementar = () => {
    setContador(contador - 1);
    };


4.-Renderización:

    return (
    <div>
        <p>Contador: {contador}</p>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
    </div>
    );

 -Se muestra el valor actual del contador.
 -Se proporcionan dos botones para incrementar y decrementar el contador.


Resumen
 -useState es un hook que permite gestionar el estado en componentes funcionales de React.
 -Se inicializa con un valor inicial y devuelve un array con dos elementos: la variable de estado y la función para actualizarla.
 -Se puede usar tantas veces como sea necesario para diferentes estados dentro de un mismo componente.

Este hook es fundamental para añadir interactividad y gestionar datos dentro de componentes funcionales en React. */