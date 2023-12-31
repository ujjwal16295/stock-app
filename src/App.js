import './App.css';
import { Navbar } from './components/Navbar';
import { StocksList } from './components/StocksList';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <StocksList/>
    </div>
  );
}

export default App;
