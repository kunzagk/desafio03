import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Alert from "./alert.jsx"

const Formulario = ({ agregarColaborador }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState('');
  const [tipoAlerta, setTipoAlerta] = useState('');

  const agregarColaboradorNuevo = (e) => {
    e.preventDefault();

    if (!nombre || !correo || !edad || !cargo || !telefono) {
      setMensajeAlerta('Por favor, completa todos los campos');
      setTipoAlerta('danger');
      setMostrarAlerta(true);
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
    setMensajeAlerta('Colaborador agregado exitosamente');
    setTipoAlerta('success');
    setMostrarAlerta(true);

    setNombre('');
    setCorreo('');
    setEdad('');
    setCargo('');
    setTelefono('');
  };

  return (
    <Container style={{backgroundColor: 'white', borderRadius: '10px', border: '1px solid blue'}}>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h5 className="text-center">Agregar un colaborador</h5>
          <form onSubmit={agregarColaboradorNuevo}>
            <Form.Group className="mb-3">
              <input
                className="w-100"
                type="text"
                placeholder="Nombre del colaborador"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <input
                className="w-100"
                type="Email"
                placeholder="Correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <input
                className="w-100"
                type="number"
                placeholder="Edad del colaborador"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
            <input
              className="w-100"
              type="text"
              placeholder="Cargo del colaborador"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3">
            <input
              className="w-100"
              type="tel"
              placeholder="Teléfono del colaborador"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            </Form.Group>
            <div>
              <button className="w-100 mb-2 btn btn-primary" type="submit">Agregar colaborador</button>
            </div>
            <div>{mostrarAlerta && <Alert mensaje={mensajeAlerta} tipo={tipoAlerta} />}</div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Formulario;
