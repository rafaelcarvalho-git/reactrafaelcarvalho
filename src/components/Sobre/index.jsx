import * as S from './styles'
import { ContentBox, Line } from '../../global.js'
import cv from '../../assets/Rafael Candido Lacerda Carvalho.pdf'
import dev from '../../assets/images/sobre-img.png'
import Fade from 'react-reveal/Fade'

function Sobre() {
    return (
        <S.About className="sobre">
            <Fade>
                <div className="container">
                    <ContentBox>
                        <div className="row">
                            <div className="col-12 col-lg-5 text-center">
                                <Fade>
                                    <S.AboutImage src={dev} alt="about-image" loading="lazy" />
                                </Fade>
                            </div>
                            <div className="col-12 col-lg-7">
                                <Fade>
                                    <div className="pt-4 pt-md-0">
                                        <div className="mb-5">
                                            <h3>Sobre mim</h3>
                                            <Line className="m-0" />
                                        </div>
                                        <h4>Rafael Carvalho</h4>
                                        <p className="lead mt-3">
                                            Olá! Tenho 22 anos e ou Desenvolvedor Web. Possuo conhecimento geral em tecnologia, programação, banco de dados, segurança, hardware, software e redes. No momento estou fazendo alguns projetos como freelancer, mas procuro uma oportunidade para ingressar por inteiro como desenvolvedor fullstack.
                                        </p>
                                        <div className="d-flex my-4">
                                            <S.AboutIcon /><p>Sistemas de Informação - 7° Semestre</p>
                                        </div>
                                        <S.BtnsAbout>
                                            <S.BtnAbout bgPrimary href="#contato" className="me-md-5">Entre em contato</S.BtnAbout>
                                            <S.BtnAbout href={cv} target="_blank" rel="noreferrer noopener">Baixar currículo</S.BtnAbout>
                                        </S.BtnsAbout>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </ContentBox>
                </div>
            </Fade>
        </S.About>
    );
}

export default Sobre;