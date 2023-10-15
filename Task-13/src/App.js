
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";
import "./App.css";
import Cart from "./components/Cart";
import './components/Style.css';
import Context from "./context/Context";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Producs from "./components/Producs";

function App() {
  return (
    <Context>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/products" element={<Producs/>} />
        <Route path="/cart" element={Cart} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </Context>
  );
}

export default App;
