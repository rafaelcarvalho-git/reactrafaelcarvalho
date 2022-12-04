import './About.css'
import { BsFillCloudArrowDownFill, BsFillChatLeftTextFill } from 'react-icons/bs'
import rafa from './rafa.png'
import { Link } from 'react-router-dom'


function About() {
  return (
    <section id="about" className="bg-dark text-white">
      <div className="container pb-5">
        <h2 className="text-center fw-bold pt-4 mb-5">Sobre mim</h2>
        <div className="row align-items-center mx-auto">
          <div class="about-items col-12 col-lg-5">
            <img class="w-100 about-img mx-auto" src={rafa} alt="" />
          </div>
          <div className="about-items col-12 col-lg-7">
            <h2 className="fw-bold mb-5 ms-3">Rafael Carvalho</h2>
            <p class="p-first text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nesciunt sint, esse iure eius voluptatibus perspiciatis sequi fuga magni perferendis beatae ratione, nam culpa veritatis dolore sunt ut minus qui Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ea delectus doloremque adipisci autem deleniti non nostrum, suscipit soluta perferendis.
            </p>
            <p class="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores pariatur animi sunt, assumenda dicta distinctio nostrum nisi, ullam dignissimos dolor!
            </p>
            <Link type="button" className="about-btn btn btn-outline-primary ms-3 mb-3" to='/contact'><BsFillChatLeftTextFill className="me-2" />Entre em contato</Link>
            <button type="button" className="about-btn btn btn-primary ms-3 mb-3"><BsFillCloudArrowDownFill className="me-2" />Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;