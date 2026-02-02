import React from "react";

export default function App(props) {
    const [starWarsData, setStarWarsData] = React.useState(null);

    console.log("Rendered in the first place!");

    React.useEffect(function () {
        console.log("Effect run in the second place!");

        fetch("https://swapi.dev/api/people/1").then((res) => res.json());
        //.then(data => setStarWarsData(data))
    });

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    );
}
