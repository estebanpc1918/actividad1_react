import { useState } from 'react'
import './App.css'


function App() {
  const [nombre, setnombre] = useState('');
  const [correo, setcorreo] = useState('');
  const [error, setError] = useState({});

  const paraTodo = (event) => {
    if(event.target.name === 'nombre'){
      setnombre(event.target.value)
    }
    else if (event.target.name === 'email'){
      setcorreo(event.target.value);
  } 
  };
  const errores = (event) => {
    event.preventDefault();
    const errors = validateForm({ texto, correo });
    setError(errors);
  };


  return (
    <>
    <h1>FORMULARIO</h1>

    <form onSubmit={errores}>
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={paraTodo}
          placeholder="Escriba su nombre aquí..."
        />
        {error.nombre && <p>{error.nombre}</p>}
        <input
          type="email"
          name="correo"
          value={correo}
          onChange={paraTodo}
          placeholder="Escriba su correo electrónico aquí..."
        />
        {error.correo && <p>{error.correo}</p>}
        <button type="submit">Enviar</button>
      </form>
    


    </>
  )
}

export default App
