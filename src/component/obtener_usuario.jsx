import { useState, useContext } from "react";
import { APIcontexto } from "../context/contexto_API";
import { Table } from "antd";

import Button from 'react-bootstrap/Button';
let dataSource = []
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
    {
        title: 'Editandose',
        dataIndex: 'Editandose',
        key: 'Editandose',
    },
];


function Obtener_Usuario() {
    const API = useContext(APIcontexto);
    let [_id, set_id] = useState("");
    const [Btn_clicked, setBtn_clicked] = useState(false);
    async function Handle_Obtener_Usuario() {
        setBtn_clicked(false)
        let id = document.getElementById("id_input").value;
        set_id(_id = id);

        const Query_Obtener_Usuario = await fetch(`${API.API}/Obtener_Usuario`, {
            method: ["POST"],
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                _id
            })
        })
        let res = await Query_Obtener_Usuario.json();
        localStorage.setItem("id_user", res._id)
        function btnclick() {
            setBtn_clicked(true);
        }
        setTimeout(() => {
            btnclick();
        }, 2000)
        let res_obj = {
            key: res._id,
            _id: res._id,
            nombre: res.nombre,
            Email: res.email,
            Editandose: " "
        };
        dataSource.push(res_obj)
        for (let i = 0; i < dataSource.length; i++) {
            if (dataSource.length - 1 == i) {
                dataSource[i].Editandose = "✓";
            } else {
                dataSource[i].Editandose = " ";
            }

        }
        // dataSource[dataSource.length - 1].Editandose = "&#9745;"
    }
    return (
        <>
            <div className="cont_padre">
                <br /><br /><br />
                <div className="cont_ID">
                    <form id="formulario_crear" action="">
                        <h1 >Ingresar id</h1>
                        <br />
                        <input id="id_input" type="text" />
                        <br />
                        <br />
                        <Button type="button" onClick={Handle_Obtener_Usuario} variant="primary">Buscar</Button>
                    </form>
                    <br />
                    <br /><br /><br />
                </div>
                <br />
                <div id="cont_users">
                    {Btn_clicked ? <Table colspan={90} dataSource={dataSource} columns={columns}></Table> : null}
                </div>

            </div>

        </>

    );
}

export default Obtener_Usuario;