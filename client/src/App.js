import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import LandingPage from "./components/LandingPage";
//import { Login } from './components/Login';
import Mylogin from './components/Mylogin'
import Register from './components/Register';
import Home from './components/Home';
import About from './components/About';
import { AuthOProvider } from "@authO/authO-react";

// import Feed from "./componentsChat";
// import Sidebar from "./components/Sidebar";

function App() {
    return (
        <>

            <AuthOProvider
                domain="localhost:3000"
                redirectUri={window.location.origin}
            >
                <BrowserRouter>

                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/Login" element={<Mylogin />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/Home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </BrowserRouter>

            </AuthOProvider>
        </>
    );
}

export default App;
