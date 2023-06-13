import { createContext } from "react";
export const APIcontexto = createContext();

function ContextoAPI() {
    return (<>
        <APIcontexto.Provider>

        </APIcontexto.Provider>
    </>);
}

export default ContextoAPI;