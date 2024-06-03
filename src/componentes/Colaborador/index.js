import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like} = props
    console.log("props colorprimario:",props)

    //condicion ? verdadero : false

    return <div className="colaborador">
                                                {/*EN ONCLICK SE AGREGA LA FUNCION () => PARA QUE NO SE EJECUTE DE 
                                                   FORMA AUTOMATICA HASTA QUE SE LE DE CLIC EN EL CIRCULO DE LA DERECHA DE EL DEL COLABORADOR */}
        <AiFillCloseCircle className="eliminar" onClick={ () => eliminarColaborador(id)}/>
                                    {/* En el style = se agrega doble llave { { } } para generar un objeto de css  */}
        <div className="encabezado" style={{backgroundColor: colorPrimario}}> 
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {/* SI FAV ES VERDADER QUE REGRESE EL CORAZON ROJO, SI ES FALSO QUE REGRESE EL CORAZON BLANCO */}
            { fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>  }
            
               
        </div>
    </div>
}

export default Colaborador 