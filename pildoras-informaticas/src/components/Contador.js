import { useState } from "react";

export const Contador = () => {

    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    }
    const decrementar = () => {
        setContador(contador - 1);
    }

    return <div>
        <button onClick={() => decrementar()} >-</button>
        <span>{contador}</span>
        <button onClick={() => incrementar()} >+</button>
    </div>
}
