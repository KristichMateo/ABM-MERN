import React, { useState } from 'react';

function State_component() {
    const [Contador, setContador] = useState(0);
    return (<>
        <button onClick={() => { setContador(Contador + 1) }}>Sumar</button>
        <h1> el contador es: {Contador} </h1>
    </>);
}

export default State_component;