import React from "react";

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({});
    const [count, setCount] = React.useState(1);

    const url = `https://swapi.dev/api/people/${count}`;

    React.useEffect(() => {
        console.log("Fetching Star Wars data of character:", count);
        fetch(url)
            .then((res) => res.json())
            .then((data) => setStarWarsData(data))
            .catch((err) => console.error("Error fetching data:", err));
    }, [count]);

    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Get next character
            </button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    );
}
