import './Header.css'
import { BsGithub, BsWhatsapp, BsLinkedin, BsEnvelope } from 'react-icons/bs'
import Typed from 'react-typed'
import ParticlesBG from './Particles/ParticlesBG'


//https://storyset.com/illustration/programming/pana

function Header() {
  return (
    <header id="header" className="bg-dark">
      {//<ParticlesBG />
      }
      <div className="container align-self-center text-info mx-auto">

        <div className="header-informations-box align-items-center my-auto text-center">
          <h2 className="header-subtitle text-white pt-4 pb-2">Olá, eu sou</h2>
          <h1 className="header-title mt-3 mb-4">Rafael Carvalho</h1>
          <h2 className="header-subtitle text-white"><Typed strings={['Web Developer',
            'System Analyst',
            'Information Technician',
            'Technology Lover ❤']}
            typeSpeed={50}
            backSpeed={50} loop /></h2>

<div className="header-icons d-flex mx-auto mt-5 bg-danger">
    <a href="https://github.com/rafaelcarvalho-git" className="header-icon mx-auto"><BsGithub/></a>
    <a href="https://api.whatsapp.com/send/?phone=5588988573004&text&app_absent=0" className="header-icon mx-auto"><BsWhatsapp/></a>
    <a href="https://www.linkedin.com/in/rafaelcarvalho-ti/" className="header-icon mx-auto"><BsLinkedin/></a>
    <a href="mailto:rafaskyplay@gmail.com" className="header-icon mx-auto"><BsEnvelope/></a>
  </div>
        </div>

      </div>
    </header>
  );
}

export default Header;