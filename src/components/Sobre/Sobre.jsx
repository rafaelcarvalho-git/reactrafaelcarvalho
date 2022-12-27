import './Sobre.css';
import dev from './eu.jpg'

function Sobre() {
    return (
        <section id="sobre" class="about-mf sect-spacing">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="box-shadow-full shadow py-5 rounded">
                            <div class="row">
                                <div class="col-12 col-lg-5 text-center">
                                    <img src={dev} class="img-fluid eu-img rounded mx-auto" alt="" />
                                </div>
                                <div class="col-12 col-lg-7">
                                    <div class="about-me pt-4 pt-md-0">
                                        <div class="title-box-2">
                                            <h3>Sobre mim</h3>
                                            <div class="line-mf m-0"></div>
                                        </div>
                                        <h4>Rafael Carvalho</h4>
                                        <p class="lead">
                                            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
                                            imperdiet et, porttitor
                                            at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla
                                            porttitor accumsan tincidunt.
                                        </p>
                                        <p class="lead">
                                            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
                                            porttitor volutpat. Vestibulum
                                            ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
                                        </p>
                                        <button class="btn btn-outline-primary">Entre em contato</button>
                                        <button class="btn btn-primary">Download CV</button>
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