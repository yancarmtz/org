import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Metodo map -> arreglo.map((equipo, index) => {
    // return <option></option>
    //})
    
    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
       <select value={props.valor} onChange={manejarCambio} >
            <option value="" disable defaultValue="" hidden>Seleccionar equipo</option>
            {/* CADA VEZ QUE SE TRABAJE CON MAP SE TIENE QUE USAR KEY QUE LE DA LA REFERENCIA UNICA*/}
            {props.equipos.map( (equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}  
        </select>
    </div>                                                                                                  
}

export default ListaOpciones

/*Este código es un componente de React que genera un elemento select con 
opciones dinámicas basadas en una lista de equipos. 
Aquí está la explicación breve y concisa de cada parte: 

return (
  <div className="lista-opciones">
    <label>Equipos</label>
    <select>
      {equipos.map((equipo, index) => (
        <option key={index}>{equipo}</option>
      ))}
    </select>
  </div>
);

Explicación del Código

1.- <div className="lista-opciones">:

    Crea un contenedor div con la clase CSS lista-opciones. 
    Esto puede ser usado para aplicar estilos específicos a este contenedor.

2.- <label>Equipos</label>:

    Un elemento label con el texto "Equipos", que usualmente 
    se asocia con el elemento select para mejorar la accesibilidad.

3.- <select>:

    Crea un menú desplegable (select). Los elementos option serán añadidos dentro de este select.

4.- {equipos.map((equipo, index) => <option key={index}>{equipo}</option>)}:

    - Utiliza el método map para iterar sobre la lista equipos.
    - Para cada equipo en la lista equipos, se crea un elemento option.
    - El key={index} se usa para proporcionar una clave única a cada option. 
    - Esto es importante para que React pueda realizar un seguimiento eficiente de los elementos en la lista.
    - El contenido de cada option es el nombre del equipo.


QUE INFORMACION TRAE EQUIPO E INDEX:

Ejemplo con Array de Equipos
Supongamos que tienes el siguiente array:

const equipos = [ 
        "Programacion",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Movil",
        "Innovacion y Gestion"
    ];

Cuando haces equipos.map((equipo, index) => { ... }), equipo y index contienen la siguiente información en cada iteración:

Primera Iteración:

equipo es 'Programacion'
index es 0
Segunda Iteración:

equipo es 'Front End'
index es 1
Tercera Iteración:

equipo es 'Data Science'
index es 2

equipo es 'Devops'
index es 3

equipo es 'UX y Diseño'
index es 4

equipo es 'Movil'
index es 5

equipo es 'Innovacion y Gestion'
index es 6

----------------------------------------------------------
PARA VERLO EN LA CONSOLA SERIA SUSTITUIR LO SIGUIENTE:

<select>
    {equipos.map((equipo, index) => {
        console.log(`Equipo: ${equipo}, Index: ${index}`);
        return <option key={index}>{equipo}</option>;
    })}
</select>

*/