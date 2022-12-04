import './Header.css'
import {BsGithub, BsWhatsapp, BsLinkedin, BsEnvelope} from 'react-icons/bs'
import Typed from 'react-typed'
import ParticlesBG from './Particles/ParticlesBG'
import dev1 from '../../assets/dev1.svg'

//https://storyset.com/illustration/programming/pana

function Header() {
  return (
    <header id="header">
      <ParticlesBG />
      <div className="container align-self-center text-info row mx-auto">   
      <div className="row"></div>     
        <div className="header-informations-box col-7 align-items-center my-auto">
          <h2 className="header-subtitle">Olá, eu sou</h2>
          <h1 className="header-title">Rafael Carvalho</h1> 
          <h2 className="header-subtitle"><Typed strings={['Web Developer',
                      'System Analyst',
                      'Information Technician',
                      'Technology Lover ❤']}
                      typeSpeed={50}
                      backSpeed={50} loop /></h2>
          <div className="header-icons d-flex mx-auto mt-5">
            <BsGithub className="header-icon mx-auto" />
            <BsWhatsapp className="header-icon mx-auto" />
            <BsLinkedin className="header-icon mx-auto" />
            <BsEnvelope className="header-icon mx-auto" />
          </div>   
        </div>                
      </div>
      <div className="col-5">
        <img src={dev1} alt="" />
      </div>
      
     </header>
  );
}

export default Header;