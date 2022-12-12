import './About.css'
import { BsFillCloudArrowDownFill, BsFillChatLeftTextFill } from 'react-icons/bs'
import rafa from '../../assets/rafa.png'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section id="about" className="bg-dark text-white">
      <div className="container py-4">
        <h2 className="text-center fw-bold">Sobre mim</h2>
        <div className="row align-items-center mx-auto py-4">
          <div className="about-items col-12 col-lg-5">
            <img className="w-100 about-img mx-auto" src={rafa} alt="" />
          </div>
          <div className="about-items col-12 col-lg-7">
            <h2 className="about-name fw-bold mb-5">Rafael Carvalho</h2>
            <p className="p-first text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nesciunt sint, esse iure eius voluptatibus perspiciatis sequi fuga magni perferendis beatae ratione, nam culpa veritatis dolore sunt ut minus qui Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ea delectus doloremque adipisci autem deleniti non nostrum, suscipit soluta perferendis.
            </p>
            <p className="text-white mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores pariatur animi sunt, assumenda dicta distinctio nostrum nisi, ullam dignissimos dolor!
            </p>
            <Link type="button" className="about-btn btn btn-outline-primary mb-3" to='/contact'><BsFillChatLeftTextFill className="me-2" />Entre em contato</Link>
            <button type="button" className="about-btn btn btn-primary ms-4 mb-3"><BsFillCloudArrowDownFill className="me-2" />Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;