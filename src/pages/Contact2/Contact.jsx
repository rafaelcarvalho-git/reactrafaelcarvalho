import './Contact.css'
import { BsEnvelope, BsPhone, BsGeoAlt } from 'react-icons/bs'
import programming from '../../assets/one.svg'

function Contact() {
    return (
        <section id="contact" className="bg-dark text-white">
            <div className="container pb-4">
            <h2 className="text-center text-info fw-bold pt-4 mb-5">Contato</h2>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="contact-item-hover text-center x-auto">
                            <BsPhone className="icons mb-3" />
                            <h5 className="text-info">(88) 98857-3004</h5>
                            <p className="text-secondary">Seg a sab 8h - 18h</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="contact-item-hover text-center mx-auto">
                            <BsGeoAlt className="icons mb-3" />
                            <h5 className="text-info">Juazeiro do Norte</h5>
                            <p className="text-secondary">Ceará, Brasil</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">

                        <div className="contact-item-hover text-center mx-auto">
                            <BsEnvelope className="icons mb-3" />
                            <h5 className="gmail text-lowercase text-info">rafaskyplay@gmail.com</h5>
                            <p className="text-secondary">Aguardo a sua mensagem</p>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    );
}

export default Contact;