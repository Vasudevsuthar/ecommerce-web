import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Store from "./components/Store";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/store" Component={Store} />
        </Routes>
        <Footer />
      </BrowserRouter>
     
    </>
  );
}

export default App;
