import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Green from "./components/Green";
import Home from "./components/Home";
import NavBar from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="container">
        <NavBar />
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/green" element={<Green />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
