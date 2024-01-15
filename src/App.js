import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Žiža airlines'


  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <h1>{title}</h1>
        <Home />
      </div>
    </div> 
  );
}

export default App;
