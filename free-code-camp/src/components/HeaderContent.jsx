export default function HeaderContent() {
    return (
        <header className="main-header">
            <nav className="navbar">
                {/* Agrupamos el logo y nombre en un link de inicio */}
                <a href="/" className="logo-container">
                    <img
                        src="./images/react-logo.png"
                        alt="React Logo"
                        className="logo"
                    />
                    <strong className="brand-name">ReactFacts</strong>
                </a>

                {/*

                Lista de navegación con enlaces reales
                
                <ul className="navigation-menu">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>

                */}
            </nav>
        </header>
    );
}
