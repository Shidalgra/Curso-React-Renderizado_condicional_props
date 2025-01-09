import './App.css';
import PropTypes, { func } from "prop-types"; // sirve para validar props

//Vamos a renderizar, si cumple con una condicion

function App() {

  const usuario = {
    nombre: "Sergio",
    apellido: "Hidalgo",
    edad: 38,
    genero: "Masculino"
  }

  const acompañante = {
    nombre: "Karen",
    apellido: "Chinchilla",
    edad: 36,
    genero: "Femenina"
  }

  const dedicacionUsuario = {
    titulo: "Sistemas",
    nivelAcademico: "Bachiller",
    trabajo: "no laboro aún"
  }

  const datosPersonales = {
    direccion: "Grecia, San Roque",
    telefono: 72657605,
    correo: "shidalgra@gmail.com"
  }

  return (
    <div>
      <h1>Acá especificaré en el código las diferentes formas de usar el renderizado y las props con sus condiciones</h1>
      <h3>Solamente es de borrar la propiedad de la condicion en el código para que se vea la diferencia en la pagina web </h3>
      <br />
      <br />
      <Saludo destinatario=" Un saludo a: " usuario={usuario} pareja=" Y el acompañante es: " acompañante={acompañante}></Saludo>
      <UnPocoMasRudo dedicacion=" La dedicacion del usuario es: " dedicacionUsuario={dedicacionUsuario}></UnPocoMasRudo>
      <DatoPersonal Personales=" Acá especificaremos datos personales: " datosPersonales={datosPersonales}></DatoPersonal>
    </div>
  );
}

function Saludo(props) {
  return (
    <div>
      {/*la condicion simple enpieza desde aquÍ "&&" y dentro de los parentesis lo que estaría dentro*/}
      {props.usuario.nombre &&
        (
          <h1>Hola {props.destinatario} {props.usuario.nombre} {props.usuario.apellido}!!!</h1>
        )
      }  {/* ojos con los parentesis y las llaves, haciendo esta condicion */}
      <p>Tienes la edad: <strong>{props.usuario.edad}</strong> años</p>
      <p>Y el genero es: <strong>{props.usuario.genero}</strong></p>
      <br />
      <br />

      {/*la condicion ternaria enpieza desde aquÍ "?"" y dentro de los parentesis lo que estaría dentro.... despues de los dos puntos se tendría que poner lo que pasaria si no existiera lo anterio, como un if-else*/}
      {props.acompañante.nombre ?
        (
          <h1>{props.pareja} {props.acompañante.nombre} {props.acompañante.apellido}</h1>
        ) :
        <h1>No se ha proporcionado el nombre de acompañante</h1>
      }   {/* ojos con los parentesis y las llaves, haciendo esta condicion el signo de pregunta y los dos puntos */}
      <p>Tienes la edad: <strong>{props.acompañante.edad}</strong> años</p>
      <p>Y el genero es: <strong>{props.acompañante.genero}</strong></p>
      <br />
      <br />
    </div>
  );
}

Saludo.propTypes = {
  usuario: PropTypes.shape(
    {
      nombre: PropTypes.string.isRequired,
      edad: PropTypes.number.isRequired
    }
  ).isRequired,
  acompañante: PropTypes.shape(
    {
      nombre: PropTypes.string.isRequired
    }
  )
}

{/* Algo mas rudo: la condicion ternaria enpieza desde aquÍ "?"" y dentro de los parentesis lo que estaría dentro.... despues de los dos puntos se tendría que poner lo que pasaria si no existiera lo anterio, como un if-else*/ }
function UnPocoMasRudo(datosProps) {
  return (
    <div>
      {datosProps.dedicacionUsuario.titulo ?
        (
          <div>
            <h1>{datosProps.dedicacion} {datosProps.dedicacionUsuario.titulo}</h1>
            <p>Nivel academico: <strong>{datosProps.dedicacionUsuario.nivelAcademico}</strong></p>
            <p>Labora?: <strong>{datosProps.dedicacionUsuario.trabajo}</strong></p></div>
        ) :
        <div>
          <h1>No se ha proporcionado el nombre de titulo</h1>
          <h3>agregue un nombre de titulo</h3>
        </div>
      }
      <br />
      <br />
    </div>
  )
};

UnPocoMasRudo.propTypes = {
  dedicacionUsuario: PropTypes.shape(
    {
      titulo: PropTypes.string.isRequired
    }
  )
}

function DatoPersonal(datoPerso) {

  //si desestructuamos o ondicamos y nos traemos para aca las propiedades, entonces ya no tendriamos que escribir todo
  //const{direccion, correo, telefono}= datoPerso.datosPersonales

                  //and  
  //ejem: direccion && correo
                   //or
  //ejemp: direccion || correo


  return (
    <div>
      {datoPerso.datosPersonales.direccion && datoPerso.datosPersonales.correo ?
        (
          <div>
            <h1>{datoPerso.Personales}</h1>
            <h2>Su dirección es: {datoPerso.datosPersonales.direccion}</h2>
            <h3>Su correo es: {datoPerso.datosPersonales.correo}</h3>
            <h4>Y su teléfono es: {datoPerso.datosPersonales.telefono}</h4>
          </div>
        ) :
        <h1>No se ha proporcionado direccion o tampoco correo</h1>
      }
    </div>
  )
}




export default App;
