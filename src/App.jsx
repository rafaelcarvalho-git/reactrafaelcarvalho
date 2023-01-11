import { GlobalStyle, Loading } from './global'
import './assets/bootstrap/bootstrap.min.css'
import React, { useState } from 'react'
import Header from './components/Header/index'
import Sobre from './components/Sobre/index'
import Habilidades from './components/Habilidades/index'
import Experiencia from './components/Experiencia/index'
import Projetos from './components/Projetos/index'
import Contato from './components/Contato/index'
import ScrollToTop from './components/ScrollToTop/index'
import SwitchTheme from './components/SwitchTheme/SwitchTheme'

function App() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 1000);

  if (loading === false) {
    return <Loading type={"spin"} color={"#4361EE"} height={100} width={100} />
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