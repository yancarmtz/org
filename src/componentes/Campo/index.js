import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {
    console.log("Datos:", props)

    const placeholderModificado = `${props.placeholder}...`

    //Destructiracion,  se crea una constante llamada type dentro de las llaves
    // se puede dar un valor al type = "text" , etc
    const { type } = props

   

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        
        props.actualizarValor(e.target.value)
    }
    
    //ONCHANGE:
    // En React, el evento onChange se utiliza para manejar los cambios en los elementos
    // de entrada (input), selectores (select) y textareas. Este evento se dispara cada 
    // vez que el valor de un elemento cambia, permitiendo que tu aplicación 
    // responda a esos cambios de manera dinámica.
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo