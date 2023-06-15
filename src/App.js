
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Obtener_Usuario from "./component/obtener_usuario";
import Formulario_Crear_Usuario from './component/formulario_crear';
import Modificar_Usuario from "./component/modificar_Usuario";
import Borrar_Usuario from "./component/borrar_usuario";
import Todos_Usuarios from "./component/todos_Usuarios";
import Inicio from "./component/Inicio"
import { UserContext } from "./context/contexto_usuario";
import { APIcontexto } from "./context/contexto_API";
import { useContext } from 'react';

function App() {
  const contexto = useContext(UserContext);
  const API = useContext(APIcontexto);
  function reload() {
    setTimeout(() => {
      window.location.reload()
    }, 100)
  }
  return (<div id='fondo'>
    <Container className='container_padre'>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <Link className='link' onClick={reload} to='/'>ABM</Link>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Link className='link' onClick={reload} to='Crear_Cuenta'> Crear Cuenta</Link>
              <Link className='link' onClick={reload} to='Obtener_Usuario'>Obtener Usuario</Link>
              <Link className='link' onClick={reload} to='Modificar_Usuario'>Modificar Usuario</Link>
              <Link className='link' onClick={reload} to='Borrar_Usuario'>Borrar Usuario</Link>
              <Link className='link' onClick={reload} to='Obtener_Usuarios'>Obtener Usuarios</Link>
            </Nav>
          </Container>
        </Navbar>
        <br /><br /><br />
        <APIcontexto.Provider value={{ API: "http://127.0.0.1:3100" }}>
          <UserContext.Provider value={{ IdContexto: localStorage.getItem("id_user"), NombreContexto: "fdsfaa", EmailContexto: "fasdf" }}>
            < Routes >
              <Route path='/Crear_Cuenta' element={<Formulario_Crear_Usuario></Formulario_Crear_Usuario>}></Route>
              <Route path='/Obtener_Usuario' element={<Obtener_Usuario></Obtener_Usuario>}></Route>
              <Route path='/Modificar_Usuario' element={<Modificar_Usuario  ></Modificar_Usuario>}></Route>
              <Route path='/Borrar_Usuario' element={<Borrar_Usuario id={contexto}></Borrar_Usuario>}></Route>
              <Route path='/Obtener_Usuarios' element={<Todos_Usuarios></Todos_Usuarios>}></Route>
              <Route path='/' element={<Inicio></Inicio>}></Route>
            </Routes>
          </UserContext.Provider>
        </APIcontexto.Provider>

      </BrowserRouter >
      <div className="App">

      </div>
    </Container >
  </div>
  );
}

export default App;
