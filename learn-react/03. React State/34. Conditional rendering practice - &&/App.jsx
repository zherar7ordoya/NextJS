import React from "react";

export default function App() {
    const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"]);

    function noMessages() {
        return <p>No unread messages!</p>;
    }

    return (
        <div>
            {unreadMessages.length > 0 ? (
                <h1>You have {unreadMessages.length} unread messages!</h1>
            ) : (
                noMessages()
            )}
        </div>
    );
}
