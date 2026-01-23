import starFilled from "./images/star-filled.png";
import starEmpty from "./images/star-empty.png";

export default function Star(props) {
    const starIcon = props.isFilled ? starFilled : starEmpty;

    return (
        <button
            aria-pressed={props.isFilled}
            aria-label={
                props.isFilled ? "Remove from favorites" : "Add to favorites"
            }
            className="favorite-button"
            onClick={props.onClick}
        >
            <img
                src={starIcon}
                alt={props.isFilled ? "filled star icon" : "empty star icon"}
                className="favorite"
            />
        </button>
    );
}
