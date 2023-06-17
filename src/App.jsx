import React, { useState } from 'react';
import Listado from './components/listado.jsx';
import Formulario from './components/formulario.jsx';
import Buscador from './components/buscador.jsx';
import Alert from './components/alert.jsx';
import { BaseColaboradores } from './assets/js/colaboradores.js';

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState(null);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const eliminarColaborador = (id) => {
    const colaboradoresActualizados = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(colaboradoresActualizados);
  };

  const filtrarColaboradores = (busqueda) => {
    const colaboradoresFiltrados = BaseColaboradores.filter((colaborador) =>
      Object.values(colaborador)
        .join(' ')
        .toLowerCase()
        .includes(busqueda.toLowerCase())
    );
    setColaboradores(colaboradoresFiltrados);
  };

  const mostrarAlerta = (mensaje, tipo) => {
    setAlerta({ mensaje, tipo });
    setTimeout(() => {
      setAlerta(null);
    }, 3000);
  };

  return (
    <div>
      <h1>Lista de Colaboradores</h1>
      {alerta && <Alert mensaje={alerta.mensaje} tipo={alerta.tipo} />}
      <Formulario agregarColaborador={agregarColaborador} mostrarAlerta={mostrarAlerta} />
      <Buscador filtrarColaboradores={filtrarColaboradores} />
      <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
    </div>
  );
};

export default App;
