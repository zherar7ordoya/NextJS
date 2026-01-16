// import Joke from "./Joke"

export default function App() {
    
    /**
     * Challenge: manually turn this string array into an array of
     * JSX elements by surrounding each ninja turtle with an <h2> element
     */
    
    const ninjaTurtles = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"]
    return (
        <main>
            {ninjaTurtles}
        </main>
    )
}

// <Joke
//     punchline="It's hard to explain puns to kleptomaniacs because they always take things literally."
// />
// <Joke
//     setup="How did the hacker escape the police?"
//     punchline="He just ransomware!"
// />
// <Joke
//     setup="Why don't pirates travel on mountain roads?"
//     punchline="Scurvy."
// />
// <Joke
//     setup="Why do bees stay in the hive in the winter?"
//     punchline="Swarm."
// />
// <Joke
//     setup="What's the best thing about Switzerland?"
//     punchline="I don't know, but the flag is a big plus!"
// />