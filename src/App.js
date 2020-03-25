import React, { useState } from "react";

export default function App() {

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')

  const handlerChange = (e) => {
    let value = e.target.value;
    if (e.target.id == 'nombre')
      setNombre(value);
    else if (e.target.id == 'apellido')
      setApellido(value);
  }

   return <div> 

    <input id='nombre' value={nombre} onChange={handlerChange} />
    <input id='apellido' value={apellido} onChange={handlerChange} />

   </div>
}