import './Works.css'
import { MdWorkOutline } from 'react-icons/md'
import React, { useState } from 'react'

var works = [
  { id: 1, company: "AR E2S CORRETORA DE SEGUROS LTDA-ME", role: "Analista de Suporte Computacional", duration: "(Set 2020 - Ago 2022)", activities: "Suporte de T.I, atendimento aos clientes, emissor e instalador de Certificados Digitais(AGR- Agente de Registro), administrador de sistemas, treinamento dos funcionários, gerenciamento da segurança da informação, e análise de documentos. Desenvolvimento do site portflólio e do sistema web interno da empresa." },
  { id: 2, company: "Núcleo de Dados da Pró-Reitoria de Extensão (PROEX)", role: "Universidade Federal do Cariri", duration: "(Jun 2022 - Dez 2022)", activities: "Suporte de T.I, acompanhamento e gerenciamento de planilhas de dados, criação de gráficos e indicadores de informações, criação de certificados para cursos e eventos, acompanhamento e participação na organização de eventos de extensão." },
  { id: 3, company: "MARTINS ADVOGADOS ASSOCIADOS", role: "Desenvolvedor FullStack", duration: "(Nov 2022 - atualmente)", activities: "Estágio e período de aprendizagem para desenvolver o sistema de controle interno solicitado pelo escritório." },
  { id: 4, company: "JUAUTOS", role: "Suporte T.I e Implantador de Sistemas", duration: "(Out 2021 - Dez 2021)", activities: "Suporte Técnico, help desk, manutenção de computadores, implementação do sistema, treinamento dos funcionários, gerenciamento da rede, instalação de programas essenciais, gerenciamento da infraestrutura de TI em geral." },
  { id: 5, company: "HERCULES CARLOS", role: "Estágio Faculdade Banco de Dados", duration: "(Out 2021 - Dez 2021)", activities: "Estágio para disciplina da faculdade. Projeto, desenvolvimento e criação de um banco de dados para um dashboard utilizando o MySQL. Criação de tabelas, relacionamentos, consultas, população e testes." }
];

function Works() {
  const [workList, setworkList] = useState([1]);

  function workOne() {
    setworkList([1])
  }

  function workTwo() {
    setworkList([2])
  }

  function workThree() {
    setworkList([3])
  }

  function workFour() {
    setworkList([4])
  }

  function workFive() {
    setworkList([5])
  }

  return (
    <section id="works" className="bg-dark text-white">
      <div className="pt-4">
        <h1 className="text-center fw-bold"><MdWorkOutline className="teste mx-auto mb-1 d-flex" />Experiência</h1>
        <div className="works row container mx-auto">
          <div className="col-lg-3 col-12">
            <div class="btn-group-vertical mx-auto d-flex pt-4" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" class="btn-check" name="job" id="job1" autocomplete="off" onClick={workOne} />
              <label class="btn btn-outline-primary" for="job1">E2S CORRETORA</label>

              <input type="radio" class="btn-check" name="job" id="job2" autocomplete="off" onClick={workTwo} />
              <label class="btn btn-outline-primary" for="job2">UFCA</label>

              <input type="radio" class="btn-check" name="job" id="job3" autocomplete="off" onClick={workThree} />
              <label class="btn btn-outline-primary" for="job3">MARTINS ADVOGADOS</label>

              <input type="radio" class="btn-check" name="job" id="job4" autocomplete="off" onClick={workFour} />
              <label class="btn btn-outline-primary" for="job4">JUAUTOS</label>

              <input type="radio" class="btn-check" name="job" id="job5" autocomplete="off" onClick={workFive} />
              <label class="btn btn-outline-primary" for="job5">HERCULES CARLOS</label>
            </div>
          </div>
          <div className="jobs col-lg-9 col-12">
            {works.map((work) => {
              if (work.id == workList) {
                return (
                  <div key={work.id} className="py-4 px-2">
                    <div className="role-duration d-flex align-items-center">
                      <h4 className="fw-bold mb-3">{work.role}</h4>
                      <p className="ms-lg-auto mx-auto">{work.duration}</p>
                    </div>
                    <h5 className="fw-bold mb-4">{work.company}</h5>
                    <p>{work.activities}</p>
                  </div>
                )
              }
            }
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;