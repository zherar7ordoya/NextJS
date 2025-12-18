import React from "react";
import imagesData from "../data/images";
import { useState } from "react";

const ImageGallery = () => {
    const { titulo, rutina = [] } = imagesData[0] || { titulo: "", rutina: [] };

    const [clicked, setClicked] = useState(null);

    return (
        <section>
            <h1>{titulo}</h1>
            <div className="image-gallery">
                {rutina.map((image, index) => (
                    <div key={index} className="image-item">
                        <img
                            src={image.img}
                            alt={image.ejercicio}
                            onClick={() => setClicked(image)}
                        />
                    </div>
                ))}
            </div>
            <div>
                {/* show full size and details of clicked image */}
                {clicked && (
                    <>
                        <h2>{clicked.ejercicio}</h2>
                        <p>Repetitions: {clicked.reps}</p>

                        <img
                            src={clicked.img}
                            alt={clicked.ejercicio}
                            className="full-size-image"
                        />
                    </>
                )}
            </div>
        </section>
    );
};

export default ImageGallery;
