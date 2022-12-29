import './Contato.css';
import { BsGithub, BsWhatsapp, BsLinkedin, BsEnvelope, BsGeoAlt, BsPhone, BsInstagram } from 'react-icons/bs'

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

function Contato() {
    return (
        <section id="contato" className="contato bg-image sect-spacing pb-4">
            <div className="overlay-mf"></div>
            <div className="container">
                <div className="box-shadow-full shadow py-4 rounded">
                    <div className="pt-2 pb-5 pt-md-0">
                        <h3 className="text-center">Entre em contato</h3>
                        <div className="line mx-auto"></div>
                    </div>
                    <div className="row mt-2">
                        <a href="tel:+5588988573004" className="col-lg-4 text-center mb-4">
                            <div className="contact-item mx-auto">
                                <BsPhone className="contact-icon mb-3 text-dark" />
                                <h5 className="color-1">(88) 98857-3004</h5>
                                <p className="text-secondary">Seg a sab 8h - 18h</p>
                            </div>
                        </a>
                        <a href="https://goo.gl/maps/H8iavTc2CnMzzvma7" target="_blank" rel="noreferrer noopener" className="col-lg-4 text-center mb-4">
                            <div className="contact-item mx-auto">
                                <BsGeoAlt className="contact-icon mb-3 text-dark" />
                                <h5 className="color-1">Juazeiro do Norte</h5>
                                <p className="text-secondary">Ceará, Brasil</p>
                            </div>
                        </a>
                        <a href="mailto:rafaskyplay@gmail.com" className="col-lg-4 text-center mb-4">
                            <div className="contact-item mx-auto">
                                <BsEnvelope className="contact-icon mb-3 text-dark" />
                                <h5 className="color-1">rafaskyplay@gmail.com</h5>
                                <p className="text-secondary">Aguardo a sua mensagem</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="social d-flex mx-auto mb-3">
                        <a className="social-icon mx-auto" href="https://github.com/rafaelcarvalho-git" target="_blank" rel="noreferrer noopener"><BsGithub /></a>
                        <a className="social-icon mx-auto" href="https://api.whatsapp.com/send/?phone=5588988573004&text&app_absent=0" target="_blank" rel="noreferrer noopener"><BsWhatsapp /></a>
                        <a className="social-icon mx-auto" href="https://www.linkedin.com/in/rafaelcarvalho-ti" target="_blank" rel="noreferrer noopener"><BsLinkedin /></a>
                        <a className="social-icon mx-auto" href="https://www.instagram.com/rafaelcarvalho.py/" target="_blank" rel="noreferrer noopener"><BsInstagram /></a>
                    </div>
                    <p className="pb-0 mb-0 text-shadow">&copy; {anoAtual} - Rafael Carvalho</p>
                </div>
            </footer>
        </section>
    );
}

export default Contato;