import { useState } from "react";

function GaleriaDeImagenes() {
    const [imagenes, setImagenes] = useState([
        {
            src: "imgs/paisaje1.jpg",
            alt: "Imagen 1",
            caption: "Cascada",
        },
        {
            src: "imgs/paisaje2.jpg",
            alt: "Imagen 2",
            caption: "Lago",
        },
        {
            src: "imgs/paisaje3.jpg",
            alt: "Imagen 3",
            caption: "Bosque",
        },
        {
            src: "imgs/paisaje4.jpg",
            alt: "Imagen 4",
            caption: "Puerto",
        },
    ]);
    const [url, setUrl] = useState("");
    const [caption, setCaption] = useState("");

    const agregarImagen = () => {
        if (url && caption) {
            setImagenes([
                ...imagenes,
                { src: url, alt: `Imagen ${imagenes.length + 1}`, caption },
            ]);
            setUrl("");
            setCaption("");
        } else {
            alert("Por favor introduce imagen y pie");
        }
    };

    return (
        <div>
            <h1
                style={{ textAlign: "center" }}
                className="text-3xl font-bold underline"
            >
                Galería de imágenes
            </h1>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <input
                    id="image-url"
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="URL de la imagen"
                />
                <input
                    id="image-caption"
                    type="text"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Pie de foto"
                />
                <button onClick={agregarImagen}>Agregar Imagen</button>
            </div>
            <div
                className="galeria"
                style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    margin: "0 auto",
                    maxWidth: "80%",
                }}
            >
                {imagenes.map((img, index) => (
                    <div key={index}>
                        <img
                            src={img.src}
                            alt={img.alt}
                            width="300"
                            height="250"
                        />
                        <p>{img.caption}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GaleriaDeImagenes;
