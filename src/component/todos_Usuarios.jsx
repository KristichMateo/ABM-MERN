import Button from 'react-bootstrap/Button';
import { Table } from "antd";
import { useContext, useState } from "react";
import { APIcontexto } from "../context/contexto_API";
import Tabla_todos_usuarios from "./tabla_todos_usuarios";
export const API = "http://127.0.0.1:3600"
let res = {}
const columns = [
    {
        title: 'nombre',
        dataIndex: 'nombre',
        key: 'nombre',
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
let datasource = []
function Todos_Usuarios() {
    const API = useContext(APIcontexto);
    const [BtnClicked, setBtnClicked] = useState(false);
    async function Handle_Todos_Usuarios() {
        setBtnClicked(false);
        let cont_users = document.getElementById("cont_users");
        let Obtener_Todos_Usuarios = await fetch(`${API.API}/Obtener_Usuarios`);
        res = await Obtener_Todos_Usuarios.json();
        console.log(res);
        function btnclick() {
            setBtnClicked(true);
        }
        setTimeout(() => {
            btnclick()
        }, 2000)

        res.forEach(usuario => {
            let objetods = {
                key: usuario._id,
                _id: usuario._id,
                nombre: usuario.nombre,
                Email: usuario.email
            }
            datasource.push(objetods);
        });
        console.log(datasource);

        setTimeout(() => {
            datasource = [];
        }, 4000);

    }
    let ds = [{
        key: 1,
        _id: 1,
        nombre: "matias",
        Email: "fdasfasf"

    }]
    return (<>
        <div className="cont_todos_users">
            <Button onClick={Handle_Todos_Usuarios} className='btn_todos_users' variant="primary">Obtener todos los usuarios</Button>
        </div>
        <br /><br /><br />
        <div id='cont_users' className="row">
            {BtnClicked ? <Table colspan={90} dataSource={datasource} columns={columns}></Table> : null}
        </div>
    </>);
}

export default Todos_Usuarios;