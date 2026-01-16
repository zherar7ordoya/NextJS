import ReactDOM from 'react-dom/client';

function App() {
  const firstName = "Joe"
  const lastName = "Schmoe"
  
  /**
   * Challenge: finish off the h1 below so it says "Hello Joe Schmoe"
   */
  
  return (
    <h1>Hello {firstName} + " " + lastName</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);