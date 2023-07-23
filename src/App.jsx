import { GlobalStyle, Loading, lightTheme, darkTheme, Container } from './global'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import Header from './pages/Header'
import About from './pages/About'
import Skills from './pages/Skills'
import Experiences from './pages/Experiences'
import Projects from './pages/Projects'
import Contact from './pages/Contact/'
import ScrollToTop from './components/ScrollToTop'
import SwitchTheme from './components/SwitchTheme'


const App = () => {
  const [loading, setLoading] = useState(false)
  const [theme, setTheme] = useState(true)

  setTimeout(() => {
    setLoading(true)
  }, 900)

  return (
    <>
      {
        !loading
          ? <Loading type={"spin"} color={"#4361EE"} height={100} width={100} />
          :
          <ThemeProvider theme={theme ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Header />
            <Container >
              <About />
              <Skills />
            </Container>
            <Experiences />
            <Projects />
            <Contact />
            <ScrollToTop />
            <SwitchTheme theme={theme} setTheme={setTheme} />
          </ThemeProvider>
      }
    </>
  );
}

export default App
