import React, { useState } from 'react';

const Buscador = ({ filtrarColaboradores }) => {
  const [busqueda, setBusqueda] = useState('');

  const buscarColaboradores = (e) => {
    e.preventDefault();
    filtrarColaboradores(busqueda);
  };

  return (
    <form onSubmit={buscarColaboradores} className="d-flex align-items-center">
      <input
        type="text"
        placeholder="Buscar colaborador"
        value={busqueda}
        className="form-control"
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <button type="submit" className = "btn btn-primary">Buscar</button>
    </form>
  );
};

export default Buscador;
