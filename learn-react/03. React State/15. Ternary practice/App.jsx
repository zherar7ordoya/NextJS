export default function App() {
    /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */
    const isGoingOut = true
    
    let answer  // 👈 Use ternary here
    
    // Remove the code below 👇 once your ternary is done
    if(isGoingOut === true) {
        answer = "Yes"
    } else {
        answer = "No"
    }
    
    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value">{answer}</button>
        </main>
    )
}
