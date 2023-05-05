import * as S from './styles'
import { Container, ContentBox, Line } from '../../global.js'
import cv from '../../assets/Rafael Candido Lacerda Carvalho.pdf'
import dev from '../../assets/images/sobre-img.png'
import Fade from 'react-reveal/Fade'

function Sobre() {
    return (
        <S.About>
            <Fade>
                <Container>
                    <ContentBox>
                        <div className="row">
                            <div className="col-12 col-lg-5 text-center">
                                <Fade>
                                    <S.AboutImage src={dev} alt="Rafael Carvalho" loading="lazy" />
                                </Fade>
                            </div>
                            <div className="col-12 col-lg-7">
                                <Fade>
                                    <div className="pt-4 pt-md-0">
                                        <div style={{ marginBottom: '3rem' }}>
                                            <h3>Sobre mim</h3>
                                            <Line style={{ margin: 0 }} />
                                        </div>
                                        <h4>Rafael Carvalho</h4>
                                        <S.AboutParagraph>
                                            Olá! Tenho 22 anos e sou Desenvolvedor Web React JS. Possuo conhecimento geral em tecnologia, programação, banco de dados, segurança, hardware, software e redes. No momento estou fazendo alguns projetos como freelancer, mas procuro uma oportunidade para ingressar por inteiro como desenvolvedor Front-end.
                                        </S.AboutParagraph>
                                        <S.AboutGraduation>
                                            <S.AboutIcon /><p>Sistemas de Informação - 7° Semestre</p>
                                        </S.AboutGraduation>
                                        <S.BtnsAbout>
                                            <S.BtnAbout bgPrimary href="#contato" className="me-md-5">Entre em contato</S.BtnAbout>
                                            <S.BtnAbout href={cv} target="_blank" rel="noreferrer noopener">Baixar currículo</S.BtnAbout>
                                        </S.BtnsAbout>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </ContentBox>
                </Container>
            </Fade>
        </S.About>
    );
}

export default Sobre;