import React from "react"

export default function App() {
    const result = React.useState("Yes")
    console.log(result)
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value">{result[0]}</button>
        </main>
    )
}
