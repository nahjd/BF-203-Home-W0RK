import { useState } from 'react'
import './App.css'
import Header from "./components/header/index"
import Navbar from "./components/navbar/index"
import About from "./components/about/index"
import Services from "./components/services/index"
import Portfolio from "./components/portfolio/index"
import Recent from "./components/recent/index"
import Click from "./components/click/index"
import Contact from "./components/contact/index"
import Button from "./components/button/index"
function App() {
  return (

    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Recent />
      <Click />
      <Contact />
      <Button />
    </>



  );
}

export default App
