import React from "react";

export default function App() {
    const [messages, setMessages] = React.useState(["a", "b"]);
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there's exactly 1 unread message, it should read "You have
     *   1 unread message" (singular)
     * - If there are > 1 unread messages, display "You have <n> unread
     *   messages" (plural)
     */

    function determineText() {
        if (messages.length === 0) {
            return "You're all caught up!";
        } else if (messages.length === 1) {
            return "You have 1 unread message";
        } else {
            return `You have ${messages.length} unread messages`;
        }
    }

    return (
        <div>
            <h1>{determineText()}</h1>
        </div>
    );
}
