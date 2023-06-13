import Accordion from 'react-bootstrap/Accordion';

function Inicio() {
    return (<>
        <div className="cont_inicio">
            <h1>
                Bienvenido a ABM de usuarios
            </h1>
        </div>
        <br /><br /><br />
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Crear Cuenta</Accordion.Header>
                <Accordion.Body>
                    En esta seccion podras crear una cuenta dando un nombre, email y una contraseña,
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>Obtener usuario</Accordion.Header>
                <Accordion.Body>
                    En esta seccion proporcionando un ID podras obtener un usuario en particular, despues de hacer esta
                    operacion podras modificarlo, o borrarlo. Para obtener el ID puedes ir a la seccion de obtener todos los
                    usuarios
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Modificar usuario</Accordion.Header>
                <Accordion.Body>
                    En esta seccion podras modificar el usuario que buscaste en la seccion de obtener un usuario.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>Obtener todos los usuarios </Accordion.Header>
                <Accordion.Body>
                    En esta seccion prescionando un boton accederas a todos los usuarios con sus respectivos IDs.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Borrar usuario</Accordion.Header>
                <Accordion.Body>
                    En esta seccion eliminaras el usuario que buscaste en la seccion de buscar un usuario.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </>);
}

export default Inicio;