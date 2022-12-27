import './Projetos.css';
import { projetos, devicons } from './Projects-data.js';

function Projetos() {
    return (
        <section id="projetos" class="sect-spacing bg-info">
            <div class="container">
                <div className="title-box">
                    <h3 class="title-section">PROJETOS</h3>
                    <div class="line"></div>
                </div>
                <div class="row">
                    {projetos.map((projeto) => {
                        return (
                            <div key={projeto.id} class="col-12 col-md-6 col-lg-4">
                                <div class="projeto shadow rounded mx-auto">
                                    <div class="projeto-img rounded-top d-block overflow-hidden">
                                        <img src={projeto.image} alt="" class="img-fluid" />
                                    </div>
                                    <div className="projeto-conteudo pb-4">
                                        <h5 className="text-center my-4 pb-2">{projeto.title}</h5>
                                        <div class="row mx-auto">
                                            <div className="col-6">
                                                <div class="btn-group btn-group-sm ms-3" role="group" aria-label="Basic example">
                                                    <button type="button" class="btn btn-outline-dark">Live</button>
                                                    <button type="button" class="btn btn-dark">Code</button>
                                                </div>
                                            </div>
                                            <div className="col-6 px-0">
                                                <div class="projeto-icons d-flex ms-auto me-3 justify-content-end">
                                                    {devicons.map((icon) => {
                                                        if (icon.id == projeto.id) {
                                                            return <img src={icon.icon} width="30px" class="projeto-icon ms-2" />
                                                        }
                                                    }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div >
            </div >
        </section >
    );
}

export default Projetos;