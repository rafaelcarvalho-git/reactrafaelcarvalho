import './Header.css';
import { BsGithub, BsWhatsapp, BsLinkedin, BsEnvelope } from 'react-icons/bs'
import Typed from 'react-typed'

const x = "<";
const devname = " RAFAEL CARVALHO ";
const y = "/>";

function Header() {
    return (
        <header id="home" className="bg-image">
            <div className="overlay-itro"></div>
            <div className="intro-content display-table">
                <div className="table-cell">
                    <div className="container">
                        <p className="display-6">Olá, eu sou</p>
                        <h1 className="intro-title mb-4"><span>{x}</span>{devname}<span>{y}</span></h1>
                        <p className="intro-subtitle"><Typed strings={['Web Developer',
                            'System Analyst',
                            'Information Technician',
                            'Technology Lover ❤']}
                            typeSpeed={50}
                            backSpeed={60} loop /></p>
                        <div className="header-icons mx-auto d-flex mb-5 mt-4">
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
