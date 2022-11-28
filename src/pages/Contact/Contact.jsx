import './Contact.css'
import { BsEnvelope, BsPhone, BsGeoAlt, BsChatLeftText } from 'react-icons/bs'
//import programming from '../../assets/programming.png'
import programming from '../../assets/one.svg'

function Contact() {
    return (
        <section id="contact" className="bg-dark text-white">
            <div className="container pt-4">
                <h1 className="text-center fw-bold"><BsChatLeftText className="contact-icon mx-auto mb-1 d-flex" />Entre em contato</h1>
                <p className="lead text-center mt-3">Venha bater um papo comigo, estou sempre disponível.</p>
                <div className="row mt-5">
                    <div className="col-7 text-center align-items-center my-auto">
                        <img className="contact-image img-fluid" src={programming} alt="" />
                    </div>
                    <div className="col-5">
                        <div className="contact-item border border-3 rounded-3 pt-4 pb-2 text-center mb-4 mx-auto">
                            <BsPhone className="icons mb-3" />
                            <h4>(88) 98857-3004</h4>
                            <p>Seg a sab 8h - 18h</p>
                        </div>
                        <div className="contact-item border border-3 rounded-3 pt-4 pb-2 text-center mb-4 mx-auto">
                            <BsGeoAlt className="icons mb-3" />
                            <h4>Juazeiro do Norte</h4>
                            <p>Ceará, Brasil</p>
                        </div>
                        <div className="contact-item border border-3 rounded-3 pt-4 pb-2 text-center mb-4 mx-auto">
                            <BsEnvelope className="icons mb-3" />
                            <h4 className="gmail text-lowercase">rafaskyplay@gmail.com</h4>
                            <p>Aguardo a sua mensagem</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;