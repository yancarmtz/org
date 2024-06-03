import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo" //<= se estaria importando el archivo index.js  
                                       //independientemente si se agrega o no despues del from ../Campo/index
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    console.log("props formulario.js: ", props)

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

// Se puedes agregar evento o event o solo e en los parametros 
    const manejarEnvio = (event) => {
        event.preventDefault()
        console.log("Manejar el envio")
        //Se crea el objetodatosAEnvia.
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        {/* Por las nuevas versiones ya no es necesario poner titulo: 
            titulo ya que son el mismo nombre */}
        {/* Para el caso de colorPrimario: color si es necesario 
            agregar los dos : y color no son el mismo nombre */}
       crearEquipo({ titulo, colorPrimario: color })
    }

    return <section className="formulario">
                {/* FORMULARIO PARA CREAR UN NUEVO COLABORADOR  */}
                <form onSubmit={manejarEnvio}>
                    <h2>Rellena el formulario para crear el colaborador.</h2>
                    <Campo 
                        titulo="Nombre" 
                        placeholder="Ingresa nombre" 
                        required 
                        valor={nombre} 
                        actualizarValor={actualizarNombre}
                    />
                    <Campo 
                        titulo="Puesto" 
                        placeholder="Ingresar puesto" 
                        required
                        valor={puesto} 
                        actualizarValor={actualizarPuesto}
                    />

                    <Campo 
                        titulo="Foto" 
                        placeholder="Ingresar enlace de foto" 
                        required
                        valor={foto} 
                        actualizarValor={actualizarFoto}
                    />

                    <ListaOpciones
                         valor={equipo} 
                         actualizarEquipo={actualizarEquipo}
                         equipos={props.equipos}

                     />

                    <Boton>
                       Crear
                    </Boton>

                </form>
                {/* FORMULARIO PARA CREAR UN NUEVO EQUIPO  */}
                <form onSubmit={manejarNuevoEquipo}>
                    <h2>Rellena el formulario para crear el equipo.</h2>
                    <Campo 
                        titulo="Titulo" 
                        placeholder="Ingresa titulo" 
                        required 
                        valor={titulo} 
                        actualizarValor={actualizarTitulo}
                    />
                    <Campo 
                        titulo="Color" 
                        placeholder="Ingresar el color en Hex" 
                        required
                        valor={color} 
                        actualizarValor={actualizarColor}
                        type="color"
                    />
                    <Boton>Registrar equipo</Boton>
                </form>
           </section>
}
 
export default Formulario