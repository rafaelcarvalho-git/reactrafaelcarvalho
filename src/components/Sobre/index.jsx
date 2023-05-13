import * as S from './styles'
import { Container, ContentBox, Line, Row } from '../../global.js'
import cv from '../../assets/Rafael Candido Lacerda Carvalho.pdf'
import dev from '../../assets/images/sobre-img.png'
import Fade from 'react-reveal/Fade'

function Sobre() {
    return (
        <S.About>
            <Fade>
                <Container>
                    <ContentBox>
                        <Row>
                            <S.AboutPhoto>
                                <Fade>
                                    <S.AboutImage src={dev} alt="Rafael Carvalho" loading="lazy" />
                                </Fade>
                            </S.AboutPhoto>
                            <S.AboutDesc>
                                <Fade>
                                    <S.AboutInfo>
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
                                            <S.BtnAbout bgPrimary href="#contato">Entre em contato</S.BtnAbout>
                                            <S.BtnAbout href={cv} target="_blank" rel="noreferrer noopener">Baixar currículo</S.BtnAbout>
                                        </S.BtnsAbout>
                                    </S.AboutInfo>
                                </Fade>
                            </S.AboutDesc>
                        </Row>
                    </ContentBox>
                </Container>
            </Fade>
        </S.About>
    );
}

export default Sobre;