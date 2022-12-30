import './Habilidades.css'
import { skills } from '../../assets/data.js'
import { BsBraces, BsLaptop, BsCodeSquare } from "react-icons/bs"
import { VscServerProcess } from "react-icons/vsc"
import Fade from 'react-reveal/Fade'

function Habilidades() {
    return (
        <section className="habilidades sect-spacing">
            <Fade>
                <div className="container">
                    <div className="mb-5">
                        <h3 className="title-section">HABILIDADES</h3>
                        <div className="line"></div>
                    </div>
                    <div className="accordion accordion-flush row" id="accordionHabilidades">
                        <Fade left>
                            <div className="col-12 col-lg-6 mb-5 px-4">
                                <div className="accordion-item rounded">
                                    <h2 className="accordion-header d-flex" id="flush-headingOne">
                                        <button className="accordion-button collapsed rounded shadow-full shadow" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            <BsBraces className="habilidade-icon mx-2 me-3 my-auto" /> Front-end developer
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                                        data-bs-parent="#accordionHabilidades">
                                        <div className="accordion-body mt-4">
                                            {skills.map((skill) => {
                                                if ((skill.id === 1) || (skill.id === 2) || (skill.id === 3) || (skill.id === 4) || (skill.id === 5)) {
                                                    return (
                                                        <div key={skill.id} className="mb-3">
                                                            <img className="skill-icon ms-2 me-2 mb-2" src={skill.skill_icon} alt="" />
                                                            <span className="fw-bold">{skill.skill_name}</span>
                                                            <div className="progress my-1">
                                                                <div className={skill.skill_progress} role="progressbar"></div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="col-12 col-lg-6 mb-5 px-4">
                                <div className="accordion-item rounded mx-auto">
                                    <h2 className="accordion-header d-flex" id="flush-headingTwo">
                                        <button className="accordion-button collapsed rounded shadow-full shadow" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            <VscServerProcess className="habilidade-icon mx-2 me-3 my-auto" /> Back-end developer
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                                        data-bs-parent="#accordionHabilidades">
                                        <div className="accordion-body mt-4">
                                            {skills.map((skill) => {
                                                if ((skill.id === 3) || (skill.id === 9) || (skill.id === 10) || (skill.id === 11)) {
                                                    return (
                                                        <div key={skill.id} className="mb-3">
                                                            <img className="skill-icon ms-2 me-2 mb-2" src={skill.skill_icon} alt="" />
                                                            <span className="fw-bold text-dark">{skill.skill_name}</span>
                                                            <div className="progress my-1">
                                                                <div className={skill.skill_progress} role="progressbar"></div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="col-12 col-lg-6 mb-5 px-4">
                                <div className="accordion-item rounded">
                                    <h2 className="accordion-header d-flex" id="flush-headingThree">
                                        <button className="accordion-button collapsed rounded shadow-full shadow" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            <BsCodeSquare className="habilidade-icon mx-2 me-3 my-auto" /> Web Designer
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                                        data-bs-parent="#accordionHabilidades">
                                        <div className="accordion-body mt-4">
                                            {skills.map((skill) => {
                                                if ((skill.id === 6) || (skill.id === 7) || (skill.id === 8)) {
                                                    return (
                                                        <div key={skill.id} className="mb-3">
                                                            <img className="skill-icon ms-2 me-2 mb-2" src={skill.skill_icon} alt="" />
                                                            <span className="fw-bold">{skill.skill_name}</span>
                                                            <div className="progress my-1">
                                                                <div className={skill.skill_progress} role="progressbar"></div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="col-12 col-lg-6 mb-5 px-4">
                                <div className="accordion-item rounded">
                                    <h2 className="accordion-header d-flex" id="flush-headingFour">
                                        <button className="accordion-button collapsed rounded shadow-full shadow" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            <BsLaptop className="habilidade-icon mx-2 me-3 my-auto" /> Information Technology
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                                        data-bs-parent="#accordionHabilidades">
                                        <div className="accordion-body mt-4">
                                            {skills.map((skill) => {
                                                if ((skill.id === 12) || (skill.id === 13) || (skill.id === 14)) {
                                                    return (
                                                        <div key={skill.id} className="mb-3">
                                                            <img className="skill-icon ms-2 me-2 mb-2" src={skill.skill_icon} alt="" />
                                                            <span className="fw-bold">{skill.skill_name}</span>
                                                            <div className="progress my-1">
                                                                <div className={skill.skill_progress} role="progressbar"></div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default Habilidades;