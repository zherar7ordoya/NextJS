import { useId } from "react";
import ReactDOM from "react-dom/client";

/**
 * Challenge: add another label and input for the password field
 */

function App() {
    // Generamos IDs únicos para esta instancia del componente
    const emailId = useId();
    const passwordId = useId();

    return (
        <section>
            <h1>Signup form</h1>
            <form>
                <label htmlFor={emailId}>Email:</label>
                <input
                    id={emailId} // Usamos la variable, no un string fijo
                    type="email"
                    name="email"
                    placeholder="joe@schmoe.com"
                />
                <br />
                <label htmlFor={passwordId}>Password:</label>
                <input
                    id={passwordId}
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                />
            </form>
            <br />
            <button>Submit</button>
        </section>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
