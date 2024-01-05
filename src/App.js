import './App.css';
import { Navbar } from './components/Navbar';
import { StocksList } from './components/StocksList';
import { WishList } from './components/WishList';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<StocksList/>}/>
      </Routes>
      <Routes>
        <Route exact path="/wishlist" element={<WishList/>}/>
      </Routes>
      <ToastContainer />

    </BrowserRouter>
  );
}

export default App;
