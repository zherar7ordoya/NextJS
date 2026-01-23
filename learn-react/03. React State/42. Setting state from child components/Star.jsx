import React from "react";
import starFilled from "./images/star-filled.png";
import starEmpty from "./images/star-empty.png";

export default function Star(props) {
    const starIcon = props.isFilled ? starFilled : starEmpty;
    console.log(starIcon);
    return (
        <button
            aria-pressed={props.contact.isFavorite}
            aria-label={
                props.contact.isFavorite
                    ? "Remove from favorites"
                    : "Add to favorites"
            }
            className="favorite-button"
        >
            <img
                src={starIcon}
                alt={
                    props.contact.isFavorite
                        ? "filled star icon"
                        : "empty star icon"
                }
                className="favorite"
            />
        </button>
    );
}
