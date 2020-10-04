/**
 * ⚡️ Hook de efecto {#️effect-hook}
 * Es probable que hayas realizado recuperación de datos, suscripciones o 
 * modificación manual del DOM desde los componentes de React. Llamamos a estas 
 * operaciones “efectos secundarios” (o “efectos” para abreviar) porque pueden 
 * afectar a otros componentes y no se pueden hacer durante el renderizado.
 * El Hook de efecto, useEffect, agrega la capacidad de realizar efectos 
 * secundarios desde un componente funcional. Tiene el mismo propósito que 
 * componentDidMount,componentDidUpdate y componentWillUnmount en las clases 
 * React, pero unificadas en una sola API. (Mostraremos ejemplos comparando 
 * useEffect con estos métodos en Usando el Hook de efecto).
 * Por ejemplo, este componente establece el título del documento después de que 
 * React actualiza el DOM:
 */

import React, { useState, useEffect } from 'react';

export default function Effect() {
    const [count, setCount] = useState(0);

    // Similar a componentDidMount y componentDidUpdate:
    useEffect(() => {
        // Actualiza el título del documento usando la Browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
      </button>
        </div>
    );
}