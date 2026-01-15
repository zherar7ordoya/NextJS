// MainSingle.js
export default function MainSingle({ place } /* Desestructuración directa */) {
    return (
        <article className="place-card">
            {" "}
            {/* Eliminamos el key aquí, ya está en el mapa de App */}
            <img
                src={place.img.src}
                alt={place.img.alt}
                className="place-image"
            />
            <div className="place-info">
                <header className="place-header">
                    <div className="place-location">
                        <img
                            src="/images/marker.png"
                            alt=""
                            aria-hidden="true"
                            className="place-icon"
                        />
                        <span className="place-country">{place.country}</span>
                        <a
                            href={place.googleMapsLink}
                            className="place-maps-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View on Google Maps
                        </a>
                    </div>
                    <h2 className="place-title">{place.title}</h2>
                </header>

                <p className="place-dates">
                    <time>{place.dates}</time>
                </p>

                <p className="place-description">{place.text}</p>
            </div>
        </article>
    );
}
