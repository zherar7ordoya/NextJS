export default function MainContent() {
    return (
        <main className="main-content">
            <img
                src="images/react-logo.png"
                className="logo-background"
                alt="React Logo"
            />
            <h1>Fun facts about React</h1>
            <ul className="facts-list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has a component-based architecture</li>
                <li>Maintained by Facebook</li>
                <li>
                    Powers thousands of enterprise apps, including mobile apps
                </li>
            </ul>
        </main>
    );
}
