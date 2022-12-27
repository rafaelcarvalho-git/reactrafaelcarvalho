import './Sobre.css';
import dev from './eu.jpg'

function Sobre() {
    return (
        <section id="sobre" className="about-mf sect-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="box-shadow-full shadow py-5 rounded">
                            <div className="row">
                                <div className="col-12 col-lg-5 text-center">
                                    <img src={dev} className="img-fluid eu-img rounded mx-auto" alt="" />
                                </div>
                                <div className="col-12 col-lg-7">
                                    <div className="about-me pt-4 pt-md-0">
                                        <div className="title-box-2">
                                            <h3>Sobre mim</h3>
                                            <div className="line-mf m-0"></div>
                                        </div>
                                        <h4>Rafael Carvalho</h4>
                                        <p className="lead">
                                            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
                                            imperdiet et, porttitor
                                            at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla
                                            porttitor accumsan tincidunt.
                                        </p>
                                        <p className="lead">
                                            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
                                            porttitor volutpat. Vestibulum
                                            ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
                                        </p>
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