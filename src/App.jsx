import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ReactLoading from 'react-loading'
import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Works from './components/Works/Works'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'


function App() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 1000);

  if (loading === false) {
    return <ReactLoading className="loader mx-auto my-auto" type={"spin"} color={"#0dcaf0"} height={100} width={100} />
  } else {
    return (
      <Router className="App">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Works />
        <Projects />
        <Contact />
        <Footer />
      </Router>
    );
  }
}

export default App;