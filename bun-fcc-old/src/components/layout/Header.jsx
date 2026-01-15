import "../../App.css";

export function Header() {
    return (
        <header>
            <img className="logo" src="react-logo.png" alt="React Logo" />
            <nav>
                <ul className="navigation">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
