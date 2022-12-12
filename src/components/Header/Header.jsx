import './Header.css'
import { BsGithub, BsWhatsapp, BsLinkedin, BsEnvelope } from 'react-icons/bs'
import Typed from 'react-typed'
import programming from '../../assets/one.svg'

function Header() {
  return (
    <header id="header" className="bg-dark">
      <div className="container align-self-center mx-auto">
        <div className="row">
          <div className="text-center col-lg-7 col-12 d-flex">
            <div className="header-items my-auto align-self-center">
              <h2 className="header-subtitle text-lg-start text-white pt-4 pb-2">Olá, eu sou</h2>
              <h1 className="header-title text-lg-start text-info mt-3 mb-4">RAFAEL CARVALHO</h1>
              <h2 className="header-subtitle text-lg-start text-white"><Typed strings={['Web Developer',
                'System Analyst',
                'Information Technician',
                'Technology Lover ❤']}
                typeSpeed={50}
                backSpeed={50} loop />
              </h2>
              <div className="header-icons d-flex mt-5 pt-5">
                <a target="_blank" rel="noreferrer noopener" href="https://github.com/rafaelcarvalho-git" className="header-icon mx-auto"><BsGithub /></a>
                <a target="_blank" rel="noreferrer noopener" href="https://api.whatsapp.com/send/?phone=5588988573004&text&app_absent=0" className="header-icon mx-auto"><BsWhatsapp /></a>
                <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/rafaelcarvalho-ti/" className="header-icon mx-auto"><BsLinkedin /></a>
                <a target="_blank" rel="noreferrer noopener" href="mailto:rafaskyplay@gmail.com" className="header-icon mx-auto"><BsEnvelope /></a>
              </div>
            </div>
          </div>
          <div className="header-image col-lg-5 col-12">
            <img src={programming} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;