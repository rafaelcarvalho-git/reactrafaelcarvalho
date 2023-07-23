import * as S from './styles'
import { Line, Container } from 'global.js'
import { BsGithub, BsWhatsapp, BsLinkedin, BsInstagram, BsPhone, BsGeoAlt, BsEnvelope } from 'react-icons/bs'
import { Fade } from 'react-reveal'

const Contact = () => {
    return (
        <S.Contact id="contact">
            <Fade>
                <Container>
                    <S.ContactBox>
                        <S.ContactTitle>
                            <h2>Get in touch</h2>
                            <Line />
                        </S.ContactTitle>
                        <S.ContactOptions>
                            <S.ContactLink href="tel:+5588988573004">
                                <S.ContactItem>
                                    <S.ContactIcon><BsPhone /></S.ContactIcon>
                                    <h3>(88) 98857-3004</h3>
                                    <p>Mon to Fri 8h - 18h</p>
                                </S.ContactItem>
                            </S.ContactLink>
                            <S.ContactLink href="https://goo.gl/maps/H8iavTc2CnMzzvma7" target="_blank" rel="noreferrer noopener">
                                <S.ContactItem>
                                    <S.ContactIcon><BsGeoAlt /></S.ContactIcon>
                                    <h3>Juazeiro do Norte</h3>
                                    <p>Ceará, Brazil</p>
                                </S.ContactItem>
                            </S.ContactLink>
                            <S.ContactLink href="mailto:rafaskyplay@gmail.com">
                                <S.ContactItem>
                                    <S.ContactIcon><BsEnvelope /></S.ContactIcon>
                                    <h3>rafaskyplay@gmail.com</h3>
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