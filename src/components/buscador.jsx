import React, { useState } from 'react';

const Buscador = ({ filtrarColaboradores }) => {
  const [busqueda, setBusqueda] = useState('');

  const buscarColaboradores = (e) => {
    e.preventDefault();
    filtrarColaboradores(busqueda);
  };

  return (
    <form onSubmit={buscarColaboradores}>
      <input
        type="text"
        placeholder="Buscar colaborador"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Buscador;
