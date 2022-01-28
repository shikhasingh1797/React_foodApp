import logo from './logo.svg';
import './App.css';
import {Link}from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello  <code>🌸🌸🌸🌸</code> World
        </p>
        <Link to="/food">Food View</Link>
        <Link to="/foodlist">Food Detail List</Link>
      </header>
    </div>
  );
}


export default App;