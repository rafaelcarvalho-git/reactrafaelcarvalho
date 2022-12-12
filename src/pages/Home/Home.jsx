import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Works from '../../components/Works/Works'
import Contact from '../../components/Contact/Contact';

function Home() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Works />
      <Contact />
    </>
  );
}

export default Home;