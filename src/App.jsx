import React, { createContext } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import './App.css'
import Home from "./pages/Home";
import Todolist from "./pages/Todolist"
import About from "./pages/About";
import Caculator from "./pages/Caculator";
import { Helmet } from "react-helmet";
export const Namecontext = createContext();
function App() {
    return (
        <>
            
            <Helmet>
                <title>Productivity</title>
            </Helmet>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/"  Component={Home}/>
                </Routes>
                <Routes>
                    <Route path="/todolists"  Component={Todolist}/>
                </Routes>
                <Routes>
                    <Route path="/about"  Component={About}/>
                </Routes>
                <Routes>
                    <Route path="/caculator"  Component={Caculator}/>
                </Routes>
                
            </BrowserRouter>
        </>
    );
}


export default App;