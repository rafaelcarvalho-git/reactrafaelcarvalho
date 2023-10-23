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
                    <Row gutter={24} align="middle">
                        <Col xs={24} sm={24} md={24} lg={9} xl={9}>
                            <S.AboutPhoto>
                                <S.AboutImage src={dev} alt="Rafael Carvalho" loading="lazy" />
                            </S.AboutPhoto>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={15} xl={15}>
                            <S.AboutInfo>
                                <S.AboutTitle>
                                    <h2>About me</h2>
                                    <Line />
                                </S.AboutTitle>
                                <h2>Rafael Carvalho</h2>
                                <S.AboutParagraph>
                                    Hello! I'm 23 years old and I'm a FullStack Developer. I have general knowledge in technology, programming, database, security, hardware, software and networks. I'm currently doing some projects as a freelancer, but I'm looking for an opportunity to join full-time as a developer and evolve in my career.
                                </S.AboutParagraph>
                                <S.AboutGraduation>
                                    <S.AboutIcon /><p>Information Systems - 8° Semester</p>
                                </S.AboutGraduation>
                                <S.BtnsAbout>
                                    <S.BtnAbout href="#contact" type='primary' size='large'>Contact Me</S.BtnAbout>
                                    <S.BtnAbout href={cv} target="_blank" rel="noreferrer noopener" type='primary' ghost={true} size='large'>Download CV</S.BtnAbout>
                                </S.BtnsAbout>
                            </S.AboutInfo>
                        </Col>
                    </Row>
                </ContentBox>
            </Fade>
        </S.About>
    );
}

export default About
