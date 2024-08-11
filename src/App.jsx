import React from "react"
import Home from "./components/Home"
import FormularioRegistro from "./components/Register"
import FormularioLogin from "./components/Login"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './App.css'
import Header from "./components/Header"


function App () {
  return (
    <div>
      <Navbar />
      {/* <Home />  */}
      {/* <FormularioRegistro/> */}
       <FormularioLogin /> 
      <Footer />
    </div>
  )
}

export default App