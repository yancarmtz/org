import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {
    //Destructuracion 
    //SI TENEMOS props.datos.colorPrimario o props.datos.colorSecundario o props.datos.titulo
    //SE PUEDE CAMBIAR POR LO SIGUIENTE:
    const {colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    console.log("eliminarColaborador: ",props)
    

    const estiloTitulo = { borderColor: colorPrimario }

    console.log("props: ", props)
    {/*EN EL STYLE CUANDO TIENE DENTRO DE LAS LLAVES OTRAS LLAVES ES PARA PODER MANEJAR LAS PROPIEDADES CSS, 
       background-color SE REPRESENTARIA ASI backgroundColor despues del guion la primer letra debe ser mayuscula*/}
    {/* SE ELIMINA EL props.datos de colorPrimario, colorSecundario, titulo ya que se declararo el props.datos en una constante antes del return */}
    return <>
        { colaboradores.length > 0 && /*En JavaScript, el operador && (AND lógico) evalúa el lado izquierdo de la expresión
                                        y, si es true, evalúa y retorna el lado derecho de la expresión. */
        <section className="equipo" style={{ backgroundColor: hexToRgba(colorPrimario, 0.6) }}> {/*El hexToRgba es un paquete que se instala desde 
                                                                                                   la terminal y sirve para darle opacacidad al color para que no afecte al color de otros 
                                                                                                   objetos en pantalla */}
            <input
              type="color"
              className="input-color"
              value={colorPrimario} //Con value se va tomar el valor de colorSecundario
              onChange={(evento) => {
                actualizarColor(evento.target.value, id) /* evento: Es el objeto del evento que se pasa automáticamente al manejador de eventos cuando ocurre un evento (como un cambio en un campo de entrada o un clic en un botón).
                                                    target: Es una referencia al elemento que desencadenó el evento (por ejemplo, el campo de entrada que se modificó).
                                                    value: Es la propiedad del target que contiene el valor actual del elemento.
                                                  */

              }}
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index) => <Colaborador
                        datos={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                    />)
                }
                </div>
            </section>
        }
    </>

}

export default Equipo

/*
DEFINICION DE &&:
-----------------

En el código que has compartido, el operador lógico && se utiliza para hacer un renderizado 
condicional en JSX (la sintaxis utilizada en React para definir elementos
y componentes de UI). Aquí está el código con algunos comentarios explicativos:

return (
  <>
    {colaboradores.length > 0 && (
      <section className="equipo" style={{ backgroundColor: colorSecundario }}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador, index) => (
            <Colaborador datos={colaborador} key={index} />
          ))}
        </div>
      </section>
    )}
  </>
);

Explicación del uso de &&:
Condicional colaboradores.length > 0:

La condición colaboradores.length > 0 verifica si la longitud del array colaboradores 
es mayor que 0, es decir, si hay al menos un colaborador en el array.

Operador lógico &&:

En JavaScript, el operador && (AND lógico) evalúa el lado izquierdo de la expresión
 y, si es true, evalúa y retorna el lado derecho de la expresión.

En el contexto de JSX, esto significa que si colaboradores.length > 0 es true, 
entonces el JSX a la derecha del && (es decir, el <section>...</section>) se renderizará.

Si colaboradores.length es 0 (o sea, si no hay colaboradores), 
entonces colaboradores.length > 0 será false y el <section>...</section> no se renderizará.
Resumen:
El uso de && en este contexto es para asegurarse de que el <section> 
que contiene la lista de colaboradores solo se renderice si hay al menos 
un colaborador en el array colaboradores. Si el array está vacío, 
esa parte del componente no se renderiza en absoluto.

Este es un patrón común en React para realizar renderizado condicional 
sin necesidad de usar un if explícito o una declaración ternaria, 
haciendo el código más conciso y fácil de leer.
*/