import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router className="App">
      <Navbar />  
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>       
          <Route path='/contact' element={<Contact />}/>
        </Routes>          
      <Footer />
    </Router>
  );
}

export default App;