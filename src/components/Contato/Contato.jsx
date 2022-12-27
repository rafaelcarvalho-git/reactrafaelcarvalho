import './Contato.css';
import { BsGithub, BsWhatsapp, BsLinkedin, BsEnvelope, BsInstagram, BsFacebook } from 'react-icons/bs'

function Contato() {
    return (
        <section class="paralax-mf footer-paralax bg-image sect-mt4" style="background-image: url(img/overlay-bg.jpg)">
            <div class="overlay-mf"></div>
            <div class="container">
                <div id="contact" class="shadow bg-light py-4 rounded">
                    <div class="title-box-2 pt-4 pt-md-0">
                        <h3 class="text-center">Entre em contato</h3>
                        <div class="line-mf mx-auto"></div>
                    </div>
                    <div class="row bg-info">
                        <div class="col-lg-4 text-center mb-5">
                            <div className="contact-item-hover mx-auto">
                                <i class="bi bi-phone contact-icon"></i>
                                <BsPhone className="contact-icon mb-3 text-white" />
                                <h5 className="text-info">(88) 98857-3004</h5>
                                <p className="text-secondary">Seg a sab 8h - 18h</p>
                            </div>
                        </div>
                        <div class="col-lg-4 text-center mb-5">
                            <div className="contact-item-hover mx-auto">
                                <i class="bi bi-geo-alt contact-icon"></i>
                                <BsGeoAlt className="contact-icon mb-3 text-white" />
                                <h5 className="text-info">Juazeiro do Norte</h5>
                                <p className="text-secondary">Ceará, Brasil</p>
                            </div>
                        </div>
                        <div class="col-lg-4 text-center mb-5">
                            <div className="contact-item-hover mx-auto">
                                <i class="bi bi-envelope contact-icon"></i>
                                <BsEnvelope className="contact-icon mb-3 text-white" />
                                <h5 className="text-info">rafaskyplay@gmail.com</h5>
                                <p className="text-secondary">Aguardo a sua mensagem</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="socials">
                                <ul>
                                    <li><a href=""><span class="ico-circle"><i class="ion-social-facebook"></i></span></a></li>
                                    <li><a href=""><span class="ico-circle"><i class="ion-social-instagram"></i></span></a></li>
                                    <li><a href=""><span class="ico-circle"><i class="ion-social-twitter"></i></span></a></li>
                                    <li><a href=""><span class="ico-circle"><i class="ion-social-pinterest"></i></span></a></li>
                                </ul>
                            </div>
                            <p class="copyright">&copy; 2022 - Rafael Carvalho</p>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default Contato;
