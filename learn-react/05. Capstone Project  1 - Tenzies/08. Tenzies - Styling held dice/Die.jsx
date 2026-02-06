/**
 * Challenge: Add conditional styling to the Die component
 * so that if it's held (isHeld === true), its background color
 * changes to a light green (#59E391)
 *
 * Remember: currently the Die component has no way of knowing
 * if it's "held" or not.
 */

export default function Die(props) {
    const style = {
        backgroundColor: props.isHeld ? "lightgreen" : "white",
    };

    return <button style={style}>{props.value}</button>;
}
