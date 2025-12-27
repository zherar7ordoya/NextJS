import createRoot from "react-dom/client";
import "./index.css";

const root = createRoot.createRoot(document.getElementById("root"));

root.render(
    <ul>
        <h1>Listen:</h1>
        <li>This</li>
        <li>is</li>
        <li>important...</li>
    </ul>
);
