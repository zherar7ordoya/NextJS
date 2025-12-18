import PropTypes from 'prop-types';

export function Saludo(props) {

    const { nombre, apellido, edad, género } = props.usuario;

    return nombre && apellido
        ? <div>
            <h1>Hola, {nombre} {apellido}!</h1>
            <p>Edad: <strong>{edad}</strong> años</p>
            <p>Género: <strong>{género}</strong></p>
        </div>
        : <h1>Hola, invitado!</h1>;
}

Saludo.propTypes = {
    usuario: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        apellido: PropTypes.string.isRequired,
        edad: PropTypes.number.isRequired,
        género: PropTypes.string.isRequired
    }).isRequired
};