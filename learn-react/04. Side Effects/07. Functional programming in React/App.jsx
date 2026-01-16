import React from "react"

export default function App(props) {
    const [state, setState] = React.useState(null)
    return (
        <div>
            <pre>{JSON.stringify({ name: "Luke" }, null, 2)}</pre>
        </div>
    )
}