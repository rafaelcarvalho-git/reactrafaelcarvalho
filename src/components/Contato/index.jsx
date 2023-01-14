import * as S from './styles'
import { Line } from '../../global.js'
import { BsGithub, BsWhatsapp, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { Fade } from 'react-reveal'

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

function Contato() {
    return (
        <S.Contato id="contato">
            <Fade>
                <div className="container">
                    <S.ContactBox>
                        <div className="pt-0 pb-5 pt-md-0">
                            <h3 className="text-center">Entre em contato</h3>
                            <Line />
                        </div>
                        <div className="row mt-2">
                            <Fade>
                                <a href="tel:+5588988573004" className="col-lg-4 text-center mb-4 text-decoration-none">
                                    <S.ContactItem>
                                        <S.ContactPhone />
                                        <h5>(88) 98857-3004</h5>
                                        <p className="text-secondary">Seg a sab 8h - 18h</p>
                                    </S.ContactItem>
                                </a>
                            </Fade>
                            <Fade>
                                <a href="https://goo.gl/maps/H8iavTc2CnMzzvma7" target="_blank" rel="noreferrer noopener" className="col-lg-4 text-center mb-4 text-decoration-none">
                                    <S.ContactItem>
                                        <S.ContactGeo />
                                        <h5>Juazeiro do Norte</h5>
                                        <p className="text-secondary">Ceará, Brasil</p>
                                    </S.ContactItem>
                                </a>
                            </Fade>
                            <Fade>
                                <a href="mailto:rafaskyplay@gmail.com" className="col-lg-4 text-center mb-4 text-decoration-none">
                                    <S.ContactItem>
                                        <S.ContactMail />
                                        <h5>rafaskyplay@gmail.com</h5>
                                        <p className="text-secondary">Aguardo a sua mensagem</p>
                                    </S.ContactItem>
                                </a>
                            </Fade>
                        </div>
                    </S.ContactBox>
                </div>
                <S.Footer>
                    <div className="container">
                        <S.FooterIcons>
                            <S.Icon href="https://github.com/rafaelcarvalho-git" target="_blank" rel="noreferrer noopener"><BsGithub /></S.Icon>
                            <S.Icon href="https://api.whatsapp.com/send/?phone=5588988573004&text&app_absent=0" target="_blank" rel="noreferrer noopener"><BsWhatsapp /></S.Icon>
                            <S.Icon href="https://www.linkedin.com/in/rafaelcarvalho-ti" target="_blank" rel="noreferrer noopener"><BsLinkedin /></S.Icon>
                            <S.Icon href="https://www.instagram.com/rafaelcarvalho.py/" target="_blank" rel="noreferrer noopener"><BsInstagram /></S.Icon>
                        </S.FooterIcons>
                        <p className="pb-0 mb-0 text-shadow">&copy; {anoAtual} - Rafael Carvalho</p>
                    </div>
                </S.Footer>
            </Fade>
        </S.Contato>
    );
}

export default Contato;