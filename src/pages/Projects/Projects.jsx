import './Projects.css'

function Projects() {

  var devicons = [
    { id: 1, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'},
    { id: 2, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'}
  ];

  var projetos = [
    { id: 1, title: "Portfólio E2S", desc: "Portfólio para exibição dos seus produtos/serviços e informações para contato e localização."},
    { id: 2, title: "SisCert E2S", desc: "Sistema Web interno para os parceiros solicitarem certificados digitais e terem informações sobre essas solicitações."},
    { id: 3, title: "Placar Futebol", desc: "Projeto desktop de um sistema para gerenciar o placar e uma partida de futebol."},
    { id: 4, title: "SolaCariri Simulator", desc: "Projeto desktop para simulação e orçamento de sistema de energia solar fotovoltaico."},
    { id: 5, title: "React Rick and Morty", desc: "aa"},
    { id: 6, title: "React Twitter Trends", desc: "bb"},
    { id: 7, title: "x", desc: "7aaa"},
    { id: 8, title: "y", desc: "8aaa"},
    { id: 9, title: "z", desc: "9aaa"}
    ];
    
  
  return (
     <section id="projects" className="bg-light">
      <div className="container pt-4">
      <h1 className="text-center fw-bold">Projetos</h1>
      <p className="lead text-center mt-3">Alguns trabalhos realizados para empresas ou aprendizado.</p>


        <div className="row pt-5">          
        {projetos.map((projeto) => 
        <div className="col-4 mb-5">

        
                <div key={projeto.id} className="card shadow-sm mx-auto">
                <img className="bd-placeholder-img card-img-top" width="100%" height="240" src="https://rafaelcarvalho-dev.web.app/img/e2scert.png" alt="" />
                 <div className="card-body">
                  <p className="text-center lead fw-bold">{projeto.title}</p>
                   <p className="card-text text-center">{projeto.desc}</p>
                   <div className="text-center mx-auto">
                     {devicons.map((icons) => 

                 
                        <img width="36px" src={icons.icon} />
                     
                  
                    
                        

                     )}
                   </div>                    
                   <div className="d-flex justify-content-between align-items-center mt-3">
                     <div className="btn-group">
                       <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                       <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                     </div>
                   </div>
                 </div>
               </div>
               </div>
        )}
        </div>
      </div>
     </section>    
  );
}

export default Projects;