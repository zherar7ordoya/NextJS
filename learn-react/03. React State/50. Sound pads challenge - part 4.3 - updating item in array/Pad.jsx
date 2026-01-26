export default function Pad(props) {
    const style = {
        backgroundColor: props.color,
    };

    return (
        <button
            style={style}
            className={props.on ? "on" : undefined}
            onClick={() => props.toggle(props.id)}
        ></button>
    );
}
