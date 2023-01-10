import { GlobalStyle, Loading } from './global'
import './assets/bootstrap/bootstrap.min.css'
import React, { useState } from 'react'
import Header from './components/Header/index'
import Sobre from './components/Sobre/Sobre'
import Experiencia from './components/Experiencia/Experiencia'
import Habilidades from './components/Habilidades/Habilidades'
import Projetos from './components/Projetos/Projetos'
import Contato from './components/Contato/index'
import ScrollToTop from './components/ScrollToTop/index'
import SwitchTheme from './components/SwitchTheme/SwitchTheme'

function App() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 1000);

  if (loading === false) {
    return <Loading className="loader mx-auto my-auto" type={"spin"} color={"#4361EE"} height={100} width={100} />
  } else {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Sobre />
        <Habilidades />
        <Experiencia />
        <Projetos />
        <Contato />
        <ScrollToTop />
        {/*<SwitchTheme />
        */}
      </>
    );
  }
}

export default App;