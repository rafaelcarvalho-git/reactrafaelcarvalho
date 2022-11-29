import './Works.css'
import { MdWorkOutline } from 'react-icons/md'

function Works() {
  return (
    <section id="works" className="bg-dark text-white">
      <div className="pt-4">
        <h1 className="text-center fw-bold"><MdWorkOutline className="teste mx-auto mb-1 d-flex" />Experiência</h1>
        <div id="workCarousel" className="carousel slide mx-auto py-4" data-bs-ride="false">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#workCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#workCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#workCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#workCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#workCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div className="carousel-inner mx-auto container">
            <div className="carousel-item active">
              <div className="work pt-3 pb-3">
                <h4 className="text-center fw-bold">E2S CORRETORA DE SEGUROS LTDA-ME</h4>
                <h5 className="text-center fw-bold">Analista de Suporte Computacional</h5>
                <p className="lead text-center">(Set 2020 - Ago 2022)</p>
                <p className="text-center mt-3">Suporte de T.I, atendimento aos clientes, emissor e instalador de Certificados Digitais(AGR- Agente de Registro), administrador de sistemas, treinamento dos funcionários, gerenciamento da segurança da informação, e análise de documentos. Desenvolvimento do site portflólio e do sistema web interno da empresa.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="work pt-3 pb-3">
                <h4 className="text-center fw-bold">ESTAGIÁRIO DE TI UFCA - (Jun 2022 - Dez 2022)</h4>
                <h5 className="text-center fw-bold">Núcleo de Dados da Pró-Reitoria de Extensão (PROEX)</h5>
                <p className="text-center mt-3">Suporte de T.I, acompanhamento e gerenciamento de planilhas de dados, criação de gráficos e indicadores de informações, criação de certificados para cursos e eventos, acompanhamento e participação na organização de eventos de extensão.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="work pt-3 pb-3">
                <h4 className="text-center fw-bold">MARTINS ADVOGADOS ASSOCIADOS (Nov 2022 - atualmente)</h4>
                <h5 className="text-center fw-bold">Desenvolvedor FullStack</h5>
                <p className="text-center mt-3">Estágio e período de aprendizagem para desenvolver o sistema de controle interno solicitado pelo escritório.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="work pt-3 pb-3">
                <h4 className="text-center fw-bold">JUAUTOS (Out 2021 - Dez 2021)</h4>
                <h5 className="text-center fw-bold">Suporte T.I e Implantador de Sistemas</h5>
                <p className="text-center mt-3">Suporte Técnico, help desk, manutenção de computadores, implementação do sistema, treinamento dos funcionários, gerenciamento da rede, instalação de programas essenciais, gerenciamento da infraestrutura de TI em geral.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="work pt-3 pb-3">
                <h4 className="text-center fw-bold">HÉRCULES CARLOS DE LIMA (Out 2021 - Dez 2021)</h4>
                <h5 className="text-center fw-bold">Estágio Faculdade Banco de Dados</h5>
                <p className="text-center mt-3">Estágio para disciplina da faculdade. Projeto, desenvolvimento e criação de um banco de dados para um dashboard utilizando o MySQL. Criação de tabelas, relacionamentos, consultas, população e testes.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#workCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>         
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#workCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;