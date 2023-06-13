import { useState, useContext } from "react";
import { APIcontexto } from "../context/contexto_API";
import Button from 'react-bootstrap/Button';



function Obtener_Usuario() {
    const API = useContext(APIcontexto);
    let [_id, set_id] = useState("");

    async function Handle_Obtener_Usuario() {
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

        function Plantilla_usuario(_id, nombre, email) {
            let cont_users = document.getElementById("cont_users")
            let cont = document.createElement('div');
            cont.innerHTML = `
            <br/>
            <div  class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${_id}</li>
            <li class="list-group-item">${nombre}</li></li>
            <li class="list-group-item">${email}</li>
            </ul>
            </div>`;
            cont_users.appendChild(cont);

        }
        Plantilla_usuario(res._id, res.nombre, res.email);
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
                <div id="cont_users">

                </div>

            </div>

        </>

    );
}

export default Obtener_Usuario;