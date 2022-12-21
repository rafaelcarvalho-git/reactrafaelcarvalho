import './Header.css'
import { BsGithub, BsWhatsapp, BsLinkedin, BsEnvelope, BsInstagram, BsFacebook } from 'react-icons/bs'
import Typed from 'react-typed'
import Zoom from 'react-reveal/Zoom'

var x = '<';
var y = '/>'

function Header() {
  return (
    <header>
      <Zoom>
        <div className="container">
          <div className="header-text text-center mt-4 text-white">
            <h5>Olá, eu sou</h5>
            <h1 className="header-under mx-auto mt-4">{x}RAFAEL CARVALHO{y}</h1>
            <h2 className="header-subtitle my-5"><Typed strings={['Web Developer',
              'System Analyst',
              'Information Technician',
              'Technology Lover ❤']}
              typeSpeed={50}
              backSpeed={60} loop />
            </h2>
            <div className="header-icons mx-auto d-flex mb-5">
              <a target="_blank" rel="noreferrer noopener" href="https://github.com/rafaelcarvalho-git" className="header-icon mx-auto"><BsGithub /></a>
              <a target="_blank" rel="noreferrer noopener" href="https://api.whatsapp.com/send/?phone=5588988573004&text&app_absent=0" className="header-icon mx-auto"><BsWhatsapp /></a>
              <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/rafaelcarvalho-ti/" className="header-icon mx-auto"><BsLinkedin /></a>
              <a target="_blank" rel="noreferrer noopener" href="mailto:rafaskyplay@gmail.com" className="header-icon mx-auto"><BsEnvelope /></a>
            </div>
          </div>
        </div>
      </Zoom>
    </header>
  );
}

export default Header;