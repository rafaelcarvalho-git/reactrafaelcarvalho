import './Sobre.css';
import dev from './eu.jpg'
import { FaUserGraduate } from "react-icons/fa"
import { BsCloudArrowDown, BsChatLeftText } from "react-icons/bs"

function Sobre() {
    return (
        <section id="sobre" className="sobre sect-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="box-shadow-full shadow py-5 rounded-3 border">
                            <div className="row">
                                <div className="col-12 col-lg-5 text-center">
                                    <img src={dev} className="img-fluid shadow sobre-img rounded mx-auto" alt="" />
                                </div>
                                <div className="col-12 col-lg-7">
                                    <div className="about-me pt-4 pt-md-0">
                                        <div className="mb-5">
                                            <h3>Sobre mim</h3>
                                            <div className="line m-0"></div>
                                        </div>
                                        <h4>Rafael Carvalho</h4>
                                        <p className="lead mt-3">
                                            Olá! Sou Desenvolvedor Web e estou me aventurando no mundo da programação. Com meus 22 anos tenho conhecimento geral em tecnologia, programação, banco de dados, segurança, hardware, software e redes. No momento estou fazendo alguns projetos web como freelancer, mas procuro uma oportunidade para ingressar por inteiro no ramo de desenvolvimento web e desktop.
                                        </p>
                                        <div className="d-flex my-4">
                                            <FaUserGraduate className="about-icon me-2" /><p>Sistemas de Informação - 7° Semestre</p>
                                        </div>
                                        <div className="d-flex flex-wrap btns-sobre">
                                            <button className="btn btn-sobre btn-outline-primary me-md-5 sobre-icon-down"><BsChatLeftText className="sobre-icon me-2" />Entre em contato</button>
                                            <button className="btn btn-sobre btn-primary sobre-icon-down"><BsCloudArrowDown className="sobre-icon me-2" />Download CV</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sobre;