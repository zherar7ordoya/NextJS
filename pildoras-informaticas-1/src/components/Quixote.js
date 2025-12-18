import { useState, useEffect } from 'react';
import ORACIONES_QUIJOTE from '../data/quixote.json';


export function Quixote() {

    const [indice, setIndice] = useState(0);

    useEffect(() => {
        document.title = `Oración ${indice + 1}`;
    }, [indice]);


    // 2. Funciones que usan el estado previo de forma segura
    const irSiguiente = () => {
        setIndice(prev => Math.min(prev + 1, ORACIONES_QUIJOTE.length - 1));
    };

    const irAnterior = () => {
        setIndice(prev => Math.max(prev - 1, 0));
    };

    // 3. UI limpia y declarativa
    return (
        <section>
            <h1>Oraciones de Don Quijote</h1>
            <p>{ORACIONES_QUIJOTE[indice]}</p>

            <nav className="row" aria-label="Navegación de oraciones">
                <button
                    onClick={irAnterior}
                    disabled={indice === 0}
                >
                    Anterior
                </button>
                <button
                    onClick={irSiguiente}
                    disabled={indice === ORACIONES_QUIJOTE.length - 1}
                >
                    Siguiente
                </button>
            </nav>
        </section>
    );
}
