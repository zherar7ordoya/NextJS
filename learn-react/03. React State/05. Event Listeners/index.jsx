import ReactDOM from 'react-dom/client';

function App() {
  
  function handleClick() {
    console.log("I was clicked!")
  }
  
  /**
   * Challenge: add our new function to the button
   */
  
  return (
    <main className="container">
      <img
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
      />
      <button onClick={}>Click me</button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);