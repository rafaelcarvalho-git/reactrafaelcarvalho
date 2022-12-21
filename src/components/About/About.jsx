import './About.css'
import { BsFillCloudArrowDownFill, BsFillChatLeftTextFill } from 'react-icons/bs'
import rafa from '../../assets/rafa.png'
import rafax from './about_img_1.png'
import { BsWhatsapp, BsFillPersonLinesFill } from "react-icons/bs"
import { FaUserGraduate, FaGraduationCap } from "react-icons/fa"

function About() {
  return (
    <section id="about" className="bg text-white">
      <div className="container py-4">
        <div className="row align-items-center mx-auto py-4">
          <div className="about-items col-12 col-lg-5">
            <img className="w-100 about-img mx-auto" src={rafax} alt="" />
          </div>
          <div className="about-items col-12 col-lg-7">
            <h2 className="about-name fw-bold mb-5">Rafael Carvalho</h2>
            <p className="p-first text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nesciunt sint, esse iure eius voluptatibus perspiciatis sequi fuga magni perferendis beatae ratione, nam culpa veritatis dolore sunt ut minus qui Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ea delectus doloremque adipisci autem deleniti non nostrum, suscipit soluta perferendis.
            </p>
            <div className="about-informations">
              <div className="about-info d-flex mb-3">
                <FaUserGraduate className="about-icon mr-3" /><p>Bacharelado em Ed. Física</p>
              </div>
              <div className="about-info d-flex mb-3">
                <FaGraduationCap className="about-icon mr-3" /><p>Pós Graduação em Nutrição</p>
              </div>
            </div>
            <a type="button" className="about-btn btn btn-outline-info mb-3" href="#contact"><BsFillChatLeftTextFill className="me-2" />Entre em contato</a>
            <button type="button" className="about-btn btn btn-info ms-4 mb-3"><BsFillCloudArrowDownFill className="me-2" />Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;