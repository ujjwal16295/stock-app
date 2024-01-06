import './App.css';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Signin } from './components/Signin';
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
      <Routes>
        <Route exact path="/signin" element={<Signin/>}/>
      </Routes>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
      <ToastContainer />

    </BrowserRouter>
  );
}

export default App;
