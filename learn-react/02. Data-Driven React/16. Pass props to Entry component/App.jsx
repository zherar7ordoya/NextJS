import Header from "./components/Header"
import Entry from "./components/Entry"

/**
 * Challenge: pass props to the Entry component to display
 * its data. See the `data.md` file for each prop name and its
 * value.
 * 
 * Then on the Entry component, receive and display the values
 * for those props. In the end, the page should look the same
 * as it does now, but without all the hard-coded data in the
 * component
 */

export default function App() {
    return (
        <>
            <Header />
            <main className="container">
                <Entry />
            </main>
        </>
    )
}