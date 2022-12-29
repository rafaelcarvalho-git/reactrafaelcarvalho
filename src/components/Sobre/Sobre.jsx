import './Sobre.css';
import dev from './eu.jpg'
import { FaUserGraduate } from "react-icons/fa"

function Sobre() {
    return (
        <section id="sobre" className="about-mf sect-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="box-shadow-full shadow py-5 rounded-3 border">
                            <div className="row">
                                <div className="col-12 col-lg-5 text-center">
                                    <img src={dev} className="img-fluid shadow eu-img rounded mx-auto" alt="" />
                                </div>
                                <div className="col-12 col-lg-7">
                                    <div className="about-me pt-4 pt-md-0">
                                        <div className="title-box-2">
                                            <h3>Sobre mim</h3>
                                            <div className="line m-0"></div>
                                        </div>
                                        <h4>Rafael Carvalho</h4>
                                        <p className="lead mt-3">
                                            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
                                            imperdiet et, porttitor
                                            at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla
                                            porttitor accumsan tincidunt.Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
                                            porttitor volutpat.
                                        </p>
                                        <div className="d-flex mb-3">
                                            <FaUserGraduate className="about-icon me-2" /><p>Sistemas de Informação - 7° Semestre</p>
                                        </div>
                                        <button className="btn btn-outline-primary">Entre em contato</button>
                                        <button className="btn btn-primary">Download CV</button>
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