import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { APIcontexto } from "../context/contexto_API";
export const API = "http://127.0.0.1:3600"
function Todos_Usuarios() {
    const API = useContext(APIcontexto);
    async function Handle_Todos_Usuarios() {
        let cont_users = document.getElementById("cont_users");
        let Obtener_Todos_Usuarios = await fetch(`${API.API}/Obtener_Usuarios`);
        let res = await Obtener_Todos_Usuarios.json();
        console.log(res);
        function Plantilla_usuario(_id, nombre, email) {
            let cont = document.createElement('div');
            cont.className = "col-xl-4 col-md-6 col-lg-4 col-xs-6";
            cont.innerHTML = `
            <br/>
            <div  class="card" style="width: 14rem;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${_id}</li>
              <li class="list-group-item">${nombre}</li></li>
              <li class="list-group-item">${email}</li>
            </ul>
          </div>`
            cont_users.appendChild(cont);
        }
        for (let i = 0; i < res.length; i++) {
            Plantilla_usuario(res[i]._id, res[i].nombre, res[i].email)
        }
    }

    return (<>
        <div className="cont_todos_users">
            <Button onClick={Handle_Todos_Usuarios} className='btn_borrar' variant="primary">Obtener todos los usuarios</Button>
        </div>
        <br /><br /><br />
        <div id='cont_users' className="row">

        </div>
    </>);
}

export default Todos_Usuarios;