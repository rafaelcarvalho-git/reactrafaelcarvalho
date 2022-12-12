import './Projects.css'
import React, { useState } from 'react'

var devicons = [
  { id: 1, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { id: 1, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
];

var projetos = [
  { id: 1, title: "Portfólio E2S", desc: "Portfólio para exibição dos seus produtos/serviços e informações para contato e localização." },
  { id: 2, title: "SisCert E2S", desc: "Sistema Web interno para os parceiros solicitarem certificados digitais e terem informações sobre essas solicitações." },
  { id: 3, title: "Placar Futebol", desc: "Projeto desktop de um sistema para gerenciar o placar e uma partida de futebol." },
  { id: 4, title: "SolaCariri Simulator", desc: "Projeto desktop para simulação e orçamento de sistema de energia solar fotovoltaico." },
  { id: 5, title: "React Rick and Morty", desc: "aa" },
  { id: 6, title: "React Twitter Trends", desc: "bb" },
  { id: 7, title: "x", desc: "7aaa" },
  { id: 8, title: "y", desc: "8aaa" },
  { id: 9, title: "z", desc: "9aaa" }
];

function Projects() {
  /* const [workList, setworkList] = useState([1]);
 
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
   }*/

  return (
    <section id="projects" className="bg-dark text-white">
      <div className="container py-4 pb-5 mb-4">
        <h2 className="text-center fw-bold">Projetos</h2>
        <div id="carouselExampleIndicators" class="carousel slide py-4" data-bs-ride="true">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4 text-center">
                    <img class="project-image rounded-4 shadow my-4" src="https://rafaelcarvalho-dev.web.app/img/e2scert.png" alt="avatar" />
                    <h5 class="mb-4">Portfólio E2S</h5>
                    <div className="dev-icons mb-3">
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                    </div>
                    <p class="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                      officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                    </p>
                    <div class="btn-group" role="group">
                      <a type="button" class="btn btn-outline-info">Live</a>
                      <a type="button" class="btn btn-info">Código</a>
                    </div>
                  </div>

                  <div class="col-lg-4 d-none d-lg-block text-center">
                    <img class="project-image rounded-4 shadow my-4" src="https://rafaelcarvalho-dev.web.app/img/e2scert.png" alt="avatar" />
                    <h5 class="mb-4">Portfólio E2S</h5>
                    <div className="dev-icons mb-3">
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                    </div>
                    <p class="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                      officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                    </p>
                    <div class="btn-group" role="group">
                      <a type="button" class="btn btn-outline-info">Live</a>
                      <a type="button" class="btn btn-info">Código</a>
                    </div>
                  </div>

                  <div class="col-lg-4 d-none d-lg-block text-center">
                    <img class="project-image rounded-4 shadow my-4" src="https://rafaelcarvalho-dev.web.app/img/e2scert.png" alt="avatar" />
                    <h5 class="mb-4">Portfólio E2S</h5>
                    <div className="dev-icons mb-3">
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                    </div>
                    <p class="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                      officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                    </p>
                    <div class="btn-group" role="group">
                      <a type="button" class="btn btn-outline-info">Live</a>
                      <a type="button" class="btn btn-info">Código</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4 text-center">
                    <img class="project-image rounded-4 shadow my-4" src="https://rafaelcarvalho-dev.web.app/img/e2scert.png" alt="avatar" />
                    <h5 class="mb-4">Portfólio E2S</h5>
                    <div className="dev-icons">
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                    </div>
                    <p class="text-white my-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                      officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                    </p>
                    <div class="btn-group" role="group">
                      <a type="button" class="btn btn-outline-info">Live</a>
                      <a type="button" class="btn btn-info">Código</a>
                    </div>
                  </div>

                  <div class="col-lg-4 d-none d-lg-block text-center">
                    <img class="project-image rounded-4 shadow my-4" src="https://rafaelcarvalho-dev.web.app/img/e2scert.png" alt="avatar" />
                    <h5 class="mb-4">Portfólio E2S</h5>
                    <div className="dev-icons mb-3">
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                    </div>
                    <p class="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                      officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                    </p>
                    <div class="btn-group" role="group">
                      <a type="button" class="btn btn-outline-info">Live</a>
                      <a type="button" class="btn btn-info">Código</a>
                    </div>
                  </div>

                  <div class="col-lg-4 d-none d-lg-block text-center">
                    <img class="project-image rounded-4 shadow my-4" src="https://rafaelcarvalho-dev.web.app/img/e2scert.png" alt="avatar" />
                    <h5 class="mb-4">Portfólio E2S</h5>
                    <div className="dev-icons mb-3">
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                    </div>
                    <p class="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                      officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                    </p>
                    <div class="btn-group" role="group">
                      <a type="button" class="btn btn-outline-info">Live</a>
                      <a type="button" class="btn btn-info">Código</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="container">
                <div class="row">
                  <div class="col-lg-4 text-center">
                    <img class="project-image rounded-4 shadow my-4" src="https://rafaelcarvalho-dev.web.app/img/e2scert.png" alt="avatar" />
                    <h5 class="mb-4">Portfólio E2S</h5>
                    <div className="dev-icons mb-3">
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                    </div>
                    <p class="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                      officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                    </p>
                    <div class="btn-group" role="group">
                      <a type="button" class="btn btn-outline-info">Live</a>
                      <a type="button" class="btn btn-info">Código</a>
                    </div>
                  </div>

                  <div class="col-lg-4 d-none d-lg-block text-center">
                    <img class="project-image rounded-4 shadow my-4" src="https://rafaelcarvalho-dev.web.app/img/e2scert.png" alt="avatar" />
                    <h5 class="mb-4">Portfólio E2S</h5>
                    <div className="dev-icons mb-3">
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                    </div>
                    <p class="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                      officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                    </p>
                    <div class="btn-group" role="group">
                      <a type="button" class="btn btn-outline-info">Live</a>
                      <a type="button" class="btn btn-info">Código</a>
                    </div>
                  </div>

                  <div class="col-lg-4 d-none d-lg-block text-center">
                    <img class="project-image rounded-4 shadow my-4" src="https://rafaelcarvalho-dev.web.app/img/e2scert.png" alt="avatar" />
                    <h5 class="mb-4">Portfólio E2S</h5>
                    <div className="dev-icons mb-3">
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <img width="36px" src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                    </div>
                    <p class="text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                      officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                    </p>
                    <div class="btn-group" role="group">
                      <a type="button" class="btn btn-outline-info">Live</a>
                      <a type="button" class="btn btn-info">Código</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <button class="carousel-control-prev pe-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next ps-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;