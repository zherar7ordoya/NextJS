import { Fragment } from "react";

export function Semantic() {
    return (
        <Fragment>
            <header>
                <h1>A Semantic Layout</h1>
                <nav>
                    <a>Home</a>
                    <a>About</a>
                    <a>Contact</a>
                </nav>
            </header>

            <section>
                <article>
                    <figure>
                        <img
                            src="react-logo.png"
                            alt="React Logo"
                            width="100px"
                        />
                        <figcaption>React Logo</figcaption>
                    </figure>

                    <aside>
                        <ul>
                            <li>Released in 2013</li>
                            <li>By Jordan Walke</li>
                        </ul>
                    </aside>
                </article>

                <article>Here, you can find the main information.</article>
            </section>

            <footer>
                <small>© 2025 My Project</small>
            </footer>
        </Fragment>
    );
}
