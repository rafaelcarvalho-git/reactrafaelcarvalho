import {
  GlobalStyle,
  Loading,
  lightTheme,
  darkTheme,
  Container,
} from './global'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import About from './pages/About'
import Skills from './pages/Skills'
import Experiences from './pages/Experiences'
import Projects from './pages/Projects'
import Contact from './pages/Contact/'
import ScrollToTop from './components/ScrollToTop'
import SwitchTheme from './components/SwitchTheme'
import OfertasMercadoLivre from './pages/OfertasMercadoLivre'
import OfertasMercadoLivreSuplementos from 'pages/OfertasMercadoLivreSuplementos'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [theme, setTheme] = useState(true)

  setTimeout(() => {
    setLoading(true)
  }, 900)

  return (
    <>
      {!loading ? (
        <Loading type={'spin'} color={'#4361EE'} height={100} width={100} />
      ) : (
        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Router>
            <Routes>
              <Route
                path='/'
                element={
                  <>
                    <Header />
                    <Container>
                      <About />
                      <Skills />
                    </Container>
                    <Experiences />
                    <Projects />
                    <Contact />
                  </>
                }
              />
              <Route
                path='/ofertas-mercado-livre'
                element={<OfertasMercadoLivre />}
              />
              <Route
                path='/ofertas-mercado-livre/suplementos'
                element={<OfertasMercadoLivreSuplementos />}
              />
            </Routes>
            <ScrollToTop />
            <SwitchTheme theme={theme} setTheme={setTheme} />
          </Router>
        </ThemeProvider>
      )}
    </>
  )
}

export default App
