import './Header.css'
import { BsGithub, BsWhatsapp, BsLinkedin, BsEnvelope } from 'react-icons/bs'
import Typed from 'react-typed'
import Zoom from 'react-reveal/Zoom'

const x = "< ";
const y = " />";

function Header() {
    return (
        <header id="home" className="bg-image">
            <div className="header-overlay"></div>
            <Zoom>
                <div className="header-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <p className="display-6">Olá, eu sou</p>
                            <h1 className="header-title mb-4 d-flex mx-auto text-shadow">
                                <div className="letter-float d-flex ms-3">
                                    <span className="me-2">{x}</span>
                                    <div>R</div>
                                    <div>A</div>
                                    <div>F</div>
                                    <div>A</div>
                                    <div>E</div>
                                    <div>L</div>
                                </div>
                                <div className="letter-float d-flex ms-3 me-3">
                                    <div>C</div>
                                    <div>A</div>
                                    <div>R</div>
                                    <div>V</div>
                                    <div>A</div>
                                    <div>L</div>
                                    <div>H</div>
                                    <div>O</div>
                                    <span className="ms-2">{y}</span>
                                </div>
                            </h1>
                            <p className="header-subtitle"><Typed strings={['Web Developer',
                                'System Analyst',
                                'Information Technician',
                                'Technology Lover ❤']}
                                typeSpeed={50}
                                backSpeed={60} loop /></p>
                            <div className="header-icons mx-auto d-flex mb-5 mt-5">
                                <a target="_blank" rel="noreferrer noopener" href="https://github.com/rafaelcarvalho-git" className="header-icon mx-auto"><BsGithub /></a>
                                <a target="_blank" rel="noreferrer noopener" href="https://api.whatsapp.com/send/?phone=5588988573004&text&app_absent=0" className="header-icon mx-auto"><BsWhatsapp /></a>
                                <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/rafaelcarvalho-ti/" className="header-icon mx-auto"><BsLinkedin /></a>
                                <a target="_blank" rel="noreferrer noopener" href="mailto:rafaskyplay@gmail.com" className="header-icon mx-auto"><BsEnvelope /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
        </header >
    );
}

export default Header;