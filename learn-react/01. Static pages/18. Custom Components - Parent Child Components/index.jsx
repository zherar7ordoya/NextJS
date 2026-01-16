import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/** Mini Challenge:
 * 
 * Move the `header` element from the Page component into 
 * its own component called "Header"
 * 
 * Then render an instance of the Header component inside
 * the Page component where the `header` used to be.
 */

function Page() {
    return (
        <>
            <header>
                <img src="react-logo.png" width="40px" alt="React logo" />
            </header>
            <main>
                <h1>Reason I am excited to learn React</h1>
                <ol>
                    <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                    <li>I am more likely to get a job as a front end developer if I know React</li>
                </ol>
            </main>
            <footer>
                <small>© 2024 Ziroll development. All rights reserved.</small>
            </footer>
        </>
    )
}

root.render(
    <Page />
)
