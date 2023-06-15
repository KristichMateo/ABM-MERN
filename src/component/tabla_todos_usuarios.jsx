import { Table } from "antd";
import Button from 'react-bootstrap/Button';

const dataSource = [];
function Tabla_todos_usuarios() {
    let todos_users = [JSON.parse(localStorage.getItem("todos_users"))];

    todos_users[0].forEach(usuario => {
        let objetods = {
            key: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email
        }
        dataSource.push(objetods);
    });

    const columns = [
        {
            title: 'nombre',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'Email',
            key: 'Email',
        },
        {
            title: '_id',
            dataIndex: '_id',
            key: '_id',
        },
    ];



    return (<>
        <Table dataSource={dataSource} columns={columns} />;
        <div className="cont_todos_users">
            <Button className='btn_todos_users' variant="primary">Obtener todos los usuarios</Button>
        </div>
        <br /><br /><br />
        <div id='cont_users' className="row">
            <Tabla_todos_usuarios ></Tabla_todos_usuarios>
        </div>
    </>);


}

export default Tabla_todos_usuarios;