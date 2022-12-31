import './App.css'
import './assets/bootstrap/bootstrap.min.css'
import React, { useState } from 'react'
import ReactLoading from 'react-loading'
import Experiencia from './components/Experiencia/Experiencia'
import Habilidades from './components/Habilidades/Habilidades'
import Header from './components/Header/Header'
import Projetos from './components/Projetos/Projetos'
import Sobre from './components/Sobre/Sobre'
import Contato from './components/Contato/Contato'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 1000);

  if (loading === false) {
    return <ReactLoading className="loader mx-auto my-auto" type={"spin"} color={"#0078ff"} height={100} width={100} />
  } else {
    return (
      <>
        <Header />
        <Sobre />
        <Habilidades />
        <Experiencia />
        <Projetos />
        <Contato />
        <ScrollToTop />
      </>
    );
  }
}

export default App;