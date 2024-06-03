import { useState } from 'react'; //<= descripcion de useState en el archivo index.js carpeta MiOrg 
import './App.css';
import Header from "./componentes/Header/Header";
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
//SE LE PUEDE DAR CUALQUIER NOMBRE DESPUES DEL AS DEL SIGUIENTE IMPORT:
import { v4 as uuid} from "uuid"; 

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programacion",
    foto: "https://github.com/genesysR-dev.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programacion",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovacion y Gestion",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    }
  ])

  // Ternario es como un if donde ? es el If y : es el else:
  // Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  //{ mostrarFormulario === true ? <Formulario /> : <div></div>  }
  // Si mostrar Formulario es verdadero muestra <Formulario/> de lo contrario va agregar 
  // el div de abrir y cerrar vacio y lo que no se oculte se posiciona donde va el formulario

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador",colaborador)
    //Spread operator: copia de los valores actuales para despues agregar los colaboradores
    actualizarColaboradores([...colaboradores, colaborador]) //<= Spread operator el concepto es agregar 3 puntitos al arreglo
  }                                                          // [...colaboradores] estaria como copiando los colaboradores

  //Eliminar colaborador:
  //const elimimarColaborador es una funcion:
  const eliminarColaborador = (id) => { 
    console.log("Eliminar colaborador", id)
    //SE CREA UNA CONSTNTE NUEVOSCOLABORADORES, SE FILTRA POR COLABORADORES CON EL PARAMETRO COLABORADOR 
    //Y CUANDO EL COLABORADOR SE DIFERENTE EL ID ENVIADO EN EL PARAMETRO ELIMINARCOLABORADOR = (ID) => {
    //FILTER REGRESA UN NUEVO ARREGLO SIN AFECTAR EL ORIGINAL:
    //                                                                El colaborador.id != id puede tambien funcionar en una sola
    //                                                                linea sin agregar el return no las llaves { }
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id != id );
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar:", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id) {
        equipo.colorPrimario = color
      }

      return equipo

    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log("Nuevo equipo", nuevoEquipo)
    //Spread operator: copia de los valores actuales para despues agregar los colaboradores
    //SE GENERA COPIA DE EQUIPOS GENERANDO UN NUEVO OBJETO LLAMADO NUEVOSEQUIPOS CON SU ID
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid()}])
  }
  
  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      {/*Si colaborador.id es igual al id del mismo colaborador que se le esta dando like */}
      if(colaborador.id === id) {
        {/*colaborador.fav = va hace igual a negar el valor de colaborador.fav  */}
        colaborador.fav = !colaborador.fav
      }
      return colaborador
 
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  //Es lo mismo tener el mostrarFormulario === true o sin e true mostrarFormulario
  //para que no agregue un div vacio <div></div> se eliminan los div y se deja todo lo demas como:
  //<></> esto react lo interpreta para que no se muestra nada en los elementos en la consola de chrome

  return (
    <div>
      <Header/>
      {/*varias formas para mostrarFormulario y oculte o muestre el formulario: */}
      {/* mostrarFormulario === true ? <Formulario /> : <></> */ }
      {/* al poner el () => en una sola linea es como si tuviera el return */}

      {mostrarFormulario && 
        <Formulario 
          equipos={equipos.map( (equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar} />
      
     {/* CADA VEZ QUE SE TRABAJE CON MAP SE TIENE QUE USAR KEY QUE LE DA LA REFERENCIA UNICA*/}

      {
        //CUANDO SE USA MAP SE DEBE USAR UNA KEY PARA QUE REACT ENCUENTRE DE FORMA MAS RAPIDA EL OBJETO
        /* 
        En React, el método map se utiliza para iterar sobre un arreglo 
        y renderizar una lista de elementos en el DOM. 
        Es una forma eficiente y concisa de aplicar una función a cada elemento de un arreglo 
        y obtener un nuevo arreglo con los resultados. 
        */
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}                /*PUEDE IR O NO LOS PARENTESIS EN colaborador => o (colaborador) => */
          //SE FILTRA POR COLABORADOR PARA QUE NO SE REPITA UN COLABORADOR EJEM QUE ES PROGRAMADOR DONDE ES FRONT END, ES DECIR QUE SOLO APAREZCA DONDE LE PERTENECE
          colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}
          eliminarColaborador ={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
        )
      }

      <Footer/>

    </div>
  );
}

<Footer />

export default App;
