import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Footer from './components/Footer/Footer'
import ReactLoading from 'react-loading'

function App() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 1000);

  if (loading === false) {
    return <ReactLoading className="loader mx-auto my-auto" type={"spin"} color={"#0072e4"} height={100} width={100} />
  } else {
    return (
      <Router className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;