import { createContext } from "react";

export const UserContext = createContext();
function Contexto_usuario() {

    return (<>
        <UserContext.Provider >

        </UserContext.Provider>
    </>);
}

export default Contexto_usuario;