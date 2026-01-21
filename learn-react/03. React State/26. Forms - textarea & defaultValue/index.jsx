import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    function signUp(formData) {
        const email = formData.get("email");
        const password = formData.get("password");
        console.log(password);
    }

    return (
        <section>
            <h1>Signup form</h1>
            <form action={signUp}>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    defaultValue="joe@schmoe.com"
                    type="email"
                    name="email"
                    placeholder="joe@schmoe.com"
                />

                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    defaultValue="password123"
                    type="password"
                    name="password"
                />

                <button>Submit</button>
            </form>
        </section>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
