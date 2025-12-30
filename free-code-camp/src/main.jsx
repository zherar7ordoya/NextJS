import createRoot from "react-dom/client";

const root = createRoot.createRoot(document.getElementById("root"));

root.render(
    <main>
        <header>
            <h1>Mi Sitio Web</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>

        <section>
            <div className="content">
                {" "}
                {/* Un contenedor simple para tus artículos */}
                <article>
                    <img src="react-logo.png" alt="React Logo" />
                    <caption>React Logo</caption>
                </article>
                <article>Esta es la información principal.</article>
            </div>
            <aside>¡Información extra!</aside>
        </section>

        <footer>© 2025 Mi Proyecto</footer>
    </main>
);
