import Button from 'react-bootstrap/Button';
import React, { useState, useContext } from 'react';
import { APIcontexto } from "../context/contexto_API";
import { UserContext } from '../context/contexto_usuario';


function Modificar_Usuario() {
    const context = useContext(UserContext);
    const API = useContext(APIcontexto);
    let [Nombre, setNombre] = useState("");
    let [Email, setEmail] = useState("");
    let [Contraseña, setContraseña] = useState("");

    async function Handle_Modificar() {
        let nombre_input = document.getElementById("nombre");
        let email_input = document.getElementById("email");
        let contraseña_input = document.getElementById("contraseña");


        setNombre(Nombre = nombre_input.value);
        setEmail(Email = email_input.value);
        setContraseña(Contraseña = contraseña_input.value)
        console.log(context.IdContexto);
        const Query_Modificar_Usuario = await fetch(`${API.API}/Modificar_Usuario/${context.IdContexto}`, {
            method: ["PUT"],
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: Nombre.toString(),
                email: Email.toString(),
                contraseña: Contraseña.toString()
            })
        })
        let res = await Query_Modificar_Usuario.json();
        if (res.Modificacion) {
            let anuncio_modificacion = document.getElementById("anuncio_modificacion");
            anuncio_modificacion.innerHTML = `<h3>Usuario modificado con exito</h3>`
        }
    }

    return (<>
        <div className='cont' id="anuncio_modificacion">
        </div>
        <div className="cont">
            <h1>Modificar Usuario</h1>
            <form id="formulario_crear" action="">
                <label htmlFor="">Nombre</label>
                <input id="nombre" type="text" />
                <br /> <br /><br />
                <label htmlFor="">Email</label>
                <input id="email" type="text" />
                <br /><br /><br />
                <label htmlFor="">Contraseña</label>
                <input id="contraseña" type="password" />
                <br /><br /><br />
                <Button onClick={Handle_Modificar} variant="primary">Modificar</Button>
                <br /><br /><br />
                <h4 htmlFor="">Usuario editandose {context.IdContexto}</h4>

            </form>
        </div>
    </>);
}

export default Modificar_Usuario;