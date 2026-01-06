import Places from "../../assets/places.js";

export default function MainContent() {
    return (
        <main className="main-content">
            {Places.map(place => (
                <article key={place.id} className="place-card">
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
                                    alt="" // Alt vacío si es puramente decorativo
                                    aria-hidden="true"
                                    className="place-icon"
                                />
                                <span className="place-country">
                                    {place.country}
                                </span>
                                <a
                                    href={place.googleMapsLink}
                                    className="place-maps-link"
                                    target="_blank"
                                    rel="noreferrer" // Seguridad adicional para target="_blank"
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
            ))}
        </main>
    );
}
