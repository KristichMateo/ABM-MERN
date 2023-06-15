import "../App.css";
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { APIcontexto } from "../context/contexto_API";

// const API = "http://127.0.0.1:3600"
function Formulario_Crear_Usuario() {
    const API = useContext(APIcontexto);
    let [Nombre, setNombre] = useState("");
    let [Email, setEmail] = useState("");
    let [Contraseña, setContraseña] = useState("");
    async function Handle_Crea_Usuario() {
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let contraseña = document.getElementById("contraseña").value;
        setNombre(Nombre = nombre);
        setNombre(Email = email);
        setNombre(Contraseña = contraseña);

        const Query_Crear_Usuario = await fetch(`${API.API}/Crear_Usuario`, {
            method: ["POST"],
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre,
                email,
                contraseña
            })
        })
        let res = await Query_Crear_Usuario.json()
        console.log(res);
        if (res.Creacion) {
            let anuncio_creacion = document.getElementById("anuncio_creacion");
            anuncio_creacion.innerHTML = `        <h1>El Usuario fue creado con exito</h1>
            <br /><h3>
            el id es ${res.inserted_id}
        </h3>`

        }
    }

    return (<>
        <div className="cont" id="anuncio_creacion">

        </div>
        <br /><br /><br /><br />
        <div className="cont">
            <h1>Crear Usuario</h1>
            <form id="formulario_crear" action="">
                <label htmlFor="">Nombre</label>
                <input id="nombre" type="text" />
                <br /> <br /><br />
                <label htmlFor="">Email</label>
                <input id="email" type="text" />
                <br /><br /><br />
                <label htmlFor="">Contraseña</label>
                <input id="contraseña" type="password" />
                <br /><br />
                <Button type="button" onClick={Handle_Crea_Usuario} variant="primary">Crear</Button>
            </form>
        </div>
    </>
    );
}

export default Formulario_Crear_Usuario;