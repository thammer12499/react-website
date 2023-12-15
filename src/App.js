import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from "./pages/Blogs";
import SignUp from "./pages/signup";
import "./App.css"
import {createRoot} from "react-dom/client";
import paperTexture from "./pages/images/papercrease.jpg"

function App() {
    return (
        <div className="container">
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/home" element={<Home />}
                    path="/home"
                    element={<Home/>}
                />
                <Route path="/about" element={<About />} />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route path="/blogs" element={<Blogs />} />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                />
            </Routes>
        </Router>

        </div>
    );
}

createRoot(document.getElementById('root')).render(<Blogs />)

export default App;