import * as S from './styles'
import { Line, Container } from 'global.js'
import { BsGithub, BsWhatsapp, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { Fade } from 'react-reveal'

const Contact = () => {
    return (
        <S.Contact id="contact">
            <Fade>
                <Container>
                    <S.ContactBox>
                        <S.ContactTitle>
                            <h3>Get in touch</h3>
                            <Line />
                        </S.ContactTitle>
                        <S.ContactOptions>
                            <S.ContactLink href="tel:+5588988573004">
                                <S.ContactItem>
                                    <S.ContactPhone />
                                    <h5>(88) 98857-3004</h5>
                                    <p>Mon to Fri 8h - 18h</p>
                                </S.ContactItem>
                            </S.ContactLink>
                            <S.ContactLink href="https://goo.gl/maps/H8iavTc2CnMzzvma7" target="_blank" rel="noreferrer noopener">
                                <S.ContactItem>
                                    <S.ContactGeo />
                                    <h5>Juazeiro do Norte</h5>
                                    <p>Ceará, Brazil</p>
                                </S.ContactItem>
                            </S.ContactLink>
                            <S.ContactLink href="mailto:rafaskyplay@gmail.com">
                                <S.ContactItem>
                                    <S.ContactMail />
                                    <h5>rafaskyplay@gmail.com</h5>
                                    <p>Send a message</p>
                                </S.ContactItem>
                            </S.ContactLink>
                        </S.ContactOptions>
                    </S.ContactBox>
                </Container>
                <S.Footer>
                    <S.FooterIcons>
                        <S.Icon href="https://github.com/rafaelcarvalho-git" target="_blank" rel="noreferrer noopener"><BsGithub /></S.Icon>
                        <S.Icon href="https://api.whatsapp.com/send/?phone=5588988573004&text&app_absent=0" target="_blank" rel="noreferrer noopener"><BsWhatsapp /></S.Icon>
                        <S.Icon href="https://www.linkedin.com/in/rafaelcarvalho-ti" target="_blank" rel="noreferrer noopener"><BsLinkedin /></S.Icon>
                        <S.Icon href="https://www.instagram.com/rafaelcarvalho.py/" target="_blank" rel="noreferrer noopener"><BsInstagram /></S.Icon>
                    </S.FooterIcons>
                    <p>&copy; {new Date().getFullYear()} - Rafael Carvalho</p>
                </S.Footer>
            </Fade>
        </S.Contact>
    );
}

export default Contact;