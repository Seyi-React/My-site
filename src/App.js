import React from "react";
import Navbar from "./components/Navbar";
import {Content} from './components/Navbar'
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './css/index.css'



function App () {

    return <>
    
     <div>
        <Navbar/>
        <Content/>
        <About/>
        <Skill/>  
        <Project/>    
        <Contact/>
        <Footer/>             
     </div>
    </>
}







export default App;