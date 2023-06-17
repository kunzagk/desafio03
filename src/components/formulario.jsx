import React, { useState } from 'react';

const Formulario = ({ agregarColaborador, mostrarAlerta }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');

  const agregarColaboradorNuevo = (e) => {
    e.preventDefault();

    if (!nombre || !correo || !edad || !cargo || !telefono) {
      mostrarAlerta('Por favor, completa todos los campos', 'danger');
      return;
    }

    const nuevoColaborador = {
      id: Date.now().toString(),
      nombre,
      correo,
      edad,
      cargo,
      telefono
    };

    agregarColaborador(nuevoColaborador);
    mostrarAlerta('Colaborador agregado exitosamente', 'success');

    setNombre('');
    setCorreo('');
    setEdad('');
    setCargo('');
    setTelefono('');
  };

  return (
    <form onSubmit={agregarColaboradorNuevo}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <input
        type="number"
        placeholder="Edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cargo"
        value={cargo}
        onChange={(e) => setCargo(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />
      <button type="submit">Agregar colaborador</button>
    </form>
  );
};

export default Formulario;
