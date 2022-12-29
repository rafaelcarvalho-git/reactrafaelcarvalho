import './Experiencia.css';
import React, { useState } from 'react'

var works = [
    { id: 1, company: "AR E2S CORRETORA DE SEGUROS LTDA-ME", role: "Analista de Suporte Computacional", duration: "(Set 2020 - Ago 2022)", activities: "Suporte de T.I, atendimento aos clientes, emissor de Certificados Digitais (AGR- Agente de Registro), treinamento dos funcionários e análise de documentos. Desenvolvimento do site portflólio e do sistema web interno da empresa." },
    { id: 2, company: "NÚCLEO DE DADOS DA PRÓ-REITORIA DE EXTENSÃO (PROEX)", role: "Universidade Federal do Cariri", duration: "(Jun 2022 - Dez 2022)", activities: "Suporte de T.I, acompanhamento e gerenciamento de planilhas de dados, criação de gráficos e indicadores de informações, criação de certificados para cursos e eventos, acompanhamento e participação na organização de eventos de extensão." },
    { id: 3, company: "MARTINS ADVOGADOS ASSOCIADOS", role: "Desenvolvedor FullStack", duration: "(Nov 2022 - atualmente)", activities: "Estágio e período de aprendizagem para desenvolver o sistema de controle interno solicitado pelo escritório. Prática com Azure, React e Chakra UI até o momento." },
];

function Experiencia() {
    const [workList, setworkList] = useState([1]);

    const switchWork = (x) => {
        setworkList([x])
    }

    return (
        <section id="experiencia" className="bg-image sect-spacing">
            <div className="container">
                <div className="title-box">
                    <h3 className="title-section text-white d">EXPERIÊNCIA</h3>
                    <div className="line"></div>
                </div>
                <div className="row experiencia mx-auto align-items-center box-shadow-full shadow rounded pt-5 pt-lg-4">
                    <div className="col-lg-3 col-12">
                        <div className="btn-group-vertical mx-auto d-flex" role="group" aria-label="Empregos">
                            <input type="radio" className="btn-check" name="job" id="job1" autocomplete="off" onClick={() => switchWork(1)} />
                            <label className="btn btn-outline-info experiencia-hover" for="job1">E2S CERTIFICADORA</label>

                            <input type="radio" className="btn-check" name="job" id="job2" autocomplete="off" onClick={() => switchWork(2)} />
                            <label className="btn btn-outline-info experiencia-hover" for="job2">UFCA</label>

                            <input type="radio" className="btn-check" name="job" id="job3" autocomplete="off" onClick={() => switchWork(3)} />
                            <label className="btn btn-outline-info experiencia-hover" for="job3">MARTINS ADVOGADOS</label>
                        </div>
                    </div>
                    <div className="experiencia-info col-lg-9 col-12">
                        {works.map((work) => {
                            if (work.id == workList) {
                                return (
                                    <div key={work.id} className="py-4 px-2">
                                        <div className="role-duration d-flex align-items-center">
                                            <h4 className="fw-bold mb-3">{work.role}</h4>
                                            <p className="ms-lg-auto mx-auto text-secondary">{work.duration}</p>
                                        </div>
                                        <h5 className="color-1 fw-bold mb-4">{work.company}</h5>
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

export default Experiencia;