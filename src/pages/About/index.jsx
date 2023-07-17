import * as S from './styles'
import { ContentBox, Line } from 'global.js'
import { Col, Row } from 'antd'
import cv from 'assets/Rafael Candido Lacerda Carvalho.pdf'
import dev from 'assets/images/sobre-img.png'
import Fade from 'react-reveal/Fade'


const About = () => {
    return (
        <S.About>
            <Fade>
                <ContentBox>
                    <Row gutter={24}>
                        <Col xs={24} sm={24} md={24} lg={9} xl={9}>
                            <S.AboutPhoto>
                                <Fade>
                                    <S.AboutImage src={dev} alt="Rafael Carvalho" loading="lazy" />
                                </Fade>
                            </S.AboutPhoto>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={15} xl={15}>
                            <Fade>
                                <S.AboutInfo>
                                    <div style={{ marginBottom: '3rem' }}>
                                        <h3>About me</h3>
                                        <Line style={{ margin: 0 }} />
                                    </div>
                                    <h4>Rafael Carvalho</h4>
                                    <S.AboutParagraph>
                                        Olá! Tenho 22 anos e sou Desenvolvedor Web React JS. Possuo conhecimento geral em tecnologia, programação, banco de dados, segurança, hardware, software e redes. No momento estou fazendo alguns projetos como freelancer, mas procuro uma oportunidade para ingressar por inteiro como desenvolvedor Front-end.
                                    </S.AboutParagraph>
                                    <S.AboutGraduation>
                                        <S.AboutIcon /><p>Information Systems - 8° Semester</p>
                                    </S.AboutGraduation>
                                    <S.BtnsAbout>
                                        <S.BtnAbout bgPrimary href="#contact">Contact</S.BtnAbout>
                                        <S.BtnAbout href={cv} target="_blank" rel="noreferrer noopener">Download CV</S.BtnAbout>
                                    </S.BtnsAbout>
                                </S.AboutInfo>
                            </Fade>
                        </Col>
                    </Row>
                </ContentBox>
            </Fade>
        </S.About>
    );
}

export default About
