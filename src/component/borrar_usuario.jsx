import Button from 'react-bootstrap/Button';
import { APIcontexto } from '../context/contexto_API';
import { UserContext } from '../context/contexto_usuario';
import { useContext } from 'react';

function Borrar_Usuario() {
    const API = useContext(APIcontexto);
    const contexto = useContext(UserContext);
    async function Handle_Borrar() {
        Borrar_Usuario = await fetch(`${API.API}/Borrar_Usuario/${contexto.IdContexto}`, {
            method: ["DELETE"],
            headers: { "Content-Type": "application/json" },
        })
        let res = await Borrar_Usuario.json()
        if (res.Eliminacion) {
            setTimeout(() => {
                let anuncio_borrar = document.getElementById("anuncio_borrar");
                anuncio_borrar.innerHTML = `<h1>Usuario Eliminado con exito</h1>`
            }, 1000)
        }
    }


    return (
        <div className="cont_btn_borrar">
            <div id='anuncio_borrar'>
            </div>
            <Button onClick={Handle_Borrar} className='btn_borrar' variant="danger">Borrar Usuario</Button>
            <br /> <br />
            <label className='lb_borrar' htmlFor="">Usuario a borrar: {contexto.IdContexto}</label>

        </div>
    );
}

export default Borrar_Usuario;