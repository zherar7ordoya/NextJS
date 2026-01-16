import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)
    
    /**
     * Challenge part 1:
     * Fetch the data from this url: "https://swapi.dev/api/people/1"
     * and save it in the starWarsData state. Make sure you don't
     * get stuck in an infinite rendering loop!
     */
    
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}