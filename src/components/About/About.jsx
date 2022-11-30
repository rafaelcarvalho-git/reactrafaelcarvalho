import './About.css'
import { BsFillCloudArrowDownFill, BsFillChatLeftTextFill } from 'react-icons/bs'
import rafael from './rafael.png'
import {Link} from 'react-router-dom'

function About() {
  return (
     <section id="about" className="bg-dark text-white">
        <div className="container pb-5">
        <h2 className="text-center fw-bold pt-4 mb-5">Sobre mim</h2>      
          <div className="row align-items-center mx-auto">
            <div className="col-3 mx-auto">
              <img src={rafael} className="img-fluid mx-auto text-center" alt="Bootstrap Themes" loading="lazy" />
            </div>
            <div className="col-8">
              <h2 className="fw-bold lh-1 mb-3 ms-3">Rafael Carvalho</h2>
              <p className="px-3">Olá meu nome é Rafael Carvalho, faço Sistemas de Informação no IFCE - Crato e estou iniciando no Desenvolvimento Web. Sou Analista de Suporte Computacional e tenho conhecimento geral em tecnologia, programação, banco de dados, segurança, hardware, software e redes. No momento estou atuando como TI e Certificador Digital, e fazendo alguns projetos web como freelancer, mas procuro uma oportunidade para ingressar por inteiro no ramo de desenvolvimento web e desktop.</p>        
              <Link type="button" className="btn btn-outline-primary ms-3" to='/contact'><BsFillChatLeftTextFill className="me-2" />Entre em contato</Link>       
              <button type="button" className="btn btn-primary ms-3"><BsFillCloudArrowDownFill className="me-2" />Download CV</button>       
            </div>
          </div>
        </div>
     </section>    
  );
}

export default About;