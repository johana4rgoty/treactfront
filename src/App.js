import React, { useState } from 'react';
import ListUsuarios from "./components/usuarios/ListaUsuarios";
import { Col, Container, Row } from "reactstrap";

// import axios from "axios";

//import './App.css';
// import CrearUsaurio from './components/usuarios/createUsuario';
// import Footer from './components/shared/Footer';
// import Barner from './components/shared/barner';

function App() {
  //const usuarios=[];
  const datosUsuario = [
    { id: 1, nombre: 'Edu', apellido: 'Lázaro' },
    { id: 2, nombre: 'Ana', apellido: 'Rodríguez' },
    { id: 3, nombre: 'Marcos', apellido: 'González' },
  ];
  
  const [usuarios] = useState(datosUsuario);

  // const cargarUsuarios = () => {
  //   axios.get("http://localhost:8888/usuarios")
  //     .then(({ data }) => setUsuarios(data));
  // };
  // useEffect(cargarUsuarios, []);

  //  const onSubmit = (values)=>{
  //    if (usuario){
  //     axios.put(`http://localhost:8888/usuarios/${usuario.id}`, values)
  //     .then(()=>cargarUsuarios());

  //    }else{
  //     axios.post('http://localhost:8888/usuarios', values)
  //     .then(()=>{
  //       setUsuario();
  //       cargarUsuarios();

  //     });
  //    }

  //  }

  //  const eliminarUsuario = (usuario) => {
  //   axios.delete(`http://localhost:8888/usuarios/${usuario.id}`)
  //   .then(()=>cargarUsuarios());

  //  }
  //  const editarUsuario = (usuario) => {
  //   axios.put(`http://localhost:8888/usuarios/${usuario.id}`)
  //   .then(()=>cargarUsuarios());

  //  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <ListUsuarios usuarios={usuarios} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
/* onDelete={eliminarUsuario} onEdit= {(usuario)=> setUsuarios()} */
/* <CrearUsaurio onSubmit={onSubmit} usuario= {usuario}/> */
