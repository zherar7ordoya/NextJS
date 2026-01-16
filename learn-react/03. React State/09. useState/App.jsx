import React from "react"

export default function App() {
    
    /**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
     */
    
    const result = React.useState("Hello")
    console.log(result)
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value">Yes</button>
        </main>
    )
}
