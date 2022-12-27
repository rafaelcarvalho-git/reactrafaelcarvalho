import './Header.css';
import { BsGithub, BsWhatsapp, BsLinkedin, BsEnvelope, BsInstagram, BsFacebook } from 'react-icons/bs'
import Typed from 'react-typed'

const devname = "< RAFAEL CARVALHO />";

function Header() {
    return (
        <header id="home" class="bg-image">
            <div class="overlay-itro"></div>
            <div class="intro-content display-table">
                <div class="table-cell">
                    <div class="container">
                        <p class="display-6 color-d">Olá, eu sou</p>
                        <h1 class="intro-title mb-4">
                            {devname}
                        </h1>
                        <p class="intro-subtitle"><Typed strings={['Web Developer',
                            'System Analyst',
                            'Information Technician',
                            'Technology Lover ❤']}
                            typeSpeed={50}
                            backSpeed={60} loop /><strong class="text-slider"></strong></p>
                        <div className="header-icons mx-auto d-flex mb-5">
                            <a target="_blank" rel="noreferrer noopener" href="https://github.com/rafaelcarvalho-git" className="header-icon mx-auto"><BsGithub /></a>
                            <a target="_blank" rel="noreferrer noopener" href="https://api.whatsapp.com/send/?phone=5588988573004&text&app_absent=0" className="header-icon mx-auto"><BsWhatsapp /></a>
                            <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/rafaelcarvalho-ti/" className="header-icon mx-auto"><BsLinkedin /></a>
                            <a target="_blank" rel="noreferrer noopener" href="mailto:rafaskyplay@gmail.com" className="header-icon mx-auto"><BsEnvelope /></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
