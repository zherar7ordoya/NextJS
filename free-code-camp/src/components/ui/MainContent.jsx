import Places from "../../assets/places.js";

export default function MainContent() {
    return (
        <main className="main-content">
            {Places.map((place) => (
                <section key={place.id} className="place-card">
                    <img
                        src={place.img.src}
                        alt={place.img.alt}
                        className="place-image"
                    />
                    <div className="place-details">
                        <div className="place-location">
                            <span className="place-country">
                                {place.country}
                            </span>
                            <a
                                href={place.googleMapsLink}
                                className="place-maps-link"
                            >
                                View on Google Maps
                            </a>
                        </div>
                        <h2 className="place-title">{place.title}</h2>
                        <p className="place-dates">{place.dates}</p>
                        <p className="place-description">{place.text}</p>
                    </div>
                </section>
            ))}
        </main>
    );
}
