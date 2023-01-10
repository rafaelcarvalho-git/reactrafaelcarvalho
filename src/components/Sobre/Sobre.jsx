import './Sobre.css'
import { Line } from '../../global.js'
import cv from '../../assets/Curriculo Rafael Candido Lacerda Carvalho.pdf'
import dev from '../../assets/images/sobre-img.png'
import { FaUserGraduate } from "react-icons/fa"
import { BsCloudArrowDown, BsChatLeftText } from "react-icons/bs"
import Fade from 'react-reveal/Fade'

function Sobre() {
    return (
        <section className="sobre sect-spacing">
            <Fade up>
                <div className="container">
                    <div className="box-shadow-full shadow py-5 rounded-3 border">
                        <div className="row">
                            <div className="col-12 col-lg-5 text-center">
                                <Fade left>
                                    <img src={dev} className="img-fluid shadow sobre-img rounded mx-auto" alt="" />
                                </Fade>
                            </div>
                            <div className="col-12 col-lg-7">
                                <Fade right>
                                    <div className="pt-4 pt-md-0">
                                        <div className="mb-5">
                                            <h3>Sobre mim</h3>
                                            <Line className="m-0"/>
                                        </div>
                                        <h4>Rafael Carvalho</h4>
                                        <p className="lead mt-3">
                                            Olá! Sou Desenvolvedor Web e estou me aventurando no mundo da programação. Com meus 22 anos tenho conhecimento geral em tecnologia, programação, banco de dados, segurança, hardware, software e redes. No momento estou fazendo alguns projetos web como freelancer, mas procuro uma oportunidade para ingressar por inteiro como desenvolvedor fullstack.
                                        </p>
                                        <div className="d-flex my-4">
                                            <FaUserGraduate className="about-icon me-2" /><p>Sistemas de Informação - 7° Semestre</p>
                                        </div>
                                        <div className="d-flex flex-wrap btns-sobre">
                                            <a href="#contato" className="btn-sobre btn-pattern info me-md-5 sobre-icon-down"><BsChatLeftText className="sobre-icon me-2" />Entre em contato</a>
                                            <a href={cv} target="_blank" rel="noreferrer noopener" className="btn-sobre btn-pattern info-border sobre-icon-down"><BsCloudArrowDown className="sobre-icon me-2" />Download CV</a>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default Sobre;