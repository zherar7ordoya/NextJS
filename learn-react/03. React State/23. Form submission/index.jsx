import { useId } from "react";
import ReactDOM from "react-dom/client";

/**
 * Why imperative form handling? Before jumping to the way of React, it's
 * important to understand how forms work in the browser. Forms are
 * inherently imperative: when a user submits a form, the browser gathers
 * all the data from the form fields and sends it to a server. This process
 * is event-driven and relies on the browser's default behavior.
 */

function App() {
    const emailId = useId();
    const passwordId = useId();

    function handleSubmit(event) {
        event.preventDefault();
        const formEl = event.currentTarget;
        const formData = new FormData(formEl);
        const email = formData.get("email");
        const password = formData.get("password");
        console.log("Email:", email);
        console.log("Password:", password);
        // Here you can add further processing, like sending data to a server
        formEl.reset();
    }

    return (
        <section>
            <h1>Signup form</h1>
            <form method="POST" onSubmit={handleSubmit}>
                <label htmlFor={emailId}>Email:</label>
                <input
                    id={emailId}
                    type="email"
                    name="email"
                    placeholder="joe@schmoe.com"
                />
                <br />

                <label htmlFor={passwordId}>Password:</label>
                <input id={passwordId} type="password" name="password" />
                <br />

                <button>Submit</button>
            </form>
        </section>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
