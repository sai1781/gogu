import "./App.css";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Product from "./Pages/Product";
import { Route, Routes } from "react-router-dom";
import User from "./Components/User";
import ContactUs from "./Components/ContactUs";
import WomensClothing from "./Components/WomensClothing";
import Electronics from "./Components/Electronics";
import Jewelery from "./Components/Jewelery";
import MensClothing from "./Components/MensClothing";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/User" element={<User />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/women's clothing" element={<WomensClothing />} />
      </Routes>
    </div>
  );
}

export default App;
