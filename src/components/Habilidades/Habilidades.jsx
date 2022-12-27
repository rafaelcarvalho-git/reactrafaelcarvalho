import './Habilidades.css';
import { BsBraces } from "react-icons/bs";
import React, { useState } from 'react'
import hard from '../../assets/hard.png'
import sec from '../../assets/sec.png'


var skills = [
    { id: 1, skill_name: "HTML", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", skill_progress: "progress-bar bg-info skill_progress_95" },
    { id: 2, skill_name: "CSS", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", skill_progress: "progress-bar bg-info skill_progress_85" },
    { id: 3, skill_name: "JAVASCRIPT", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", skill_progress: "progress-bar bg-info skill_progress_55" },
    { id: 4, skill_name: "BOOTSTRAP", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", skill_progress: "progress-bar bg-info skill_progress_90" },
    { id: 5, skill_name: "REACT JS", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", skill_progress: "progress-bar bg-info skill_progress_50" },
    { id: 6, skill_name: "ADOBE PHOTOSHOP", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", skill_progress: "progress-bar bg-info skill_progress_60" },
    { id: 7, skill_name: "FIGMA", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", skill_progress: "progress-bar bg-info skill_progress_45" },
    { id: 8, skill_name: "CANVA", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", skill_progress: "progress-bar bg-info skill_progress_40" },
    { id: 9, skill_name: "PHP", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", skill_progress: "progress-bar bg-info skill_progress_50" },
    { id: 10, skill_name: "JAVA", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", skill_progress: "progress-bar bg-info skill_progress_45" },
    { id: 11, skill_name: "PYTHON", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", skill_progress: "progress-bar bg-info skill_progress_50" },
    { id: 12, skill_name: "MYSQL - PHPMYADMIN", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", skill_progress: "progress-bar bg-info skill_progress_70" },
    { id: 13, skill_name: "HARDWARE", skill_icon: hard, skill_progress: "progress-bar bg-info skill_progress_95" },
    { id: 14, skill_name: "GIT - GITHUB", skill_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", skill_progress: "progress-bar bg-info skill_progress_70" },
    { id: 15, skill_name: "SEGURANÇA DIGITAL", skill_icon: sec, skill_progress: "progress-bar bg-info skill_progress_50" }
];

var s = [
    { id: 1, name: "Front-end developer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", skill_progress: "progress-bar bg-info skill_progress_95" }

];

function Habilidades() {
    return (
        <section id="habilidades" className="sect-spacing mb-5">
            <div className="container">
                <div className="title-box">
                    <h3 className="title-section">HABILIDADES</h3>
                    <div className="line"></div>
                </div>
                <div className="accordion accordion-flush row" id="accordionHabilidades">
                    <div className="col-6 mb-5 px-4">
                        <div className="accordion-item">
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
                                        if ((skill.id == 1) || (skill.id == 2) || (skill.id == 3) || (skill.id == 4) || (skill.id == 5)) {
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
                    <div className="col-6 mb-5 px-4">
                        <div className="accordion-item mx-auto">
                            <h2 className="accordion-header d-flex" id="flush-headingTwo">
                                <button className="accordion-button collapsed rounded shadow-full shadow" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    <BsBraces className="habilidade-icon mx-2 me-3 my-auto" /> Front-end developer
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                                data-bs-parent="#accordionHabilidades">
                                <div className="accordion-body mt-4">
                                    {skills.map((skill) => {
                                        if ((skill.id == 6) || (skill.id == 7) || (skill.id == 8) || (skill.id == 9) || (skill.id == 10)) {
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
                    <div className="col-6 mb-5 mb-lg-0 px-4">
                        <div className="accordion-item">
                            <h2 className="accordion-header d-flex" id="flush-headingThree">
                                <button className="accordion-button collapsed rounded shadow-full shadow" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <BsBraces className="habilidade-icon mx-2 me-3 my-auto" /> Front-end developer
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                                data-bs-parent="#accordionHabilidades">
                                <div className="accordion-body mt-4">
                                    {skills.map((skill) => {
                                        if (skill.id == (1 || 2 || 3)) {
                                            return (
                                                <div key={skill.id} className="mb-3">
                                                    <img className="skill-icon ms-2 me-2 mb-2" src={skill.skill_icon} alt="" />
                                                    <span className="fw-bold text-white">{skill.skill_name}</span>
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
                    <div className="col-6 mb-5 mb-lg-0 px-4">
                        <div className="accordion-item">
                            <h2 className="accordion-header d-flex" id="flush-headingFour">
                                <button className="accordion-button collapsed rounded shadow-full shadow" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    <BsBraces className="habilidade-icon mx-2 me-3 my-auto" /> Front-end developer
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                                data-bs-parent="#accordionHabilidades">
                                <div className="accordion-body mt-4">
                                    {skills.map((skill) => {
                                        if (skill.id == (1 || 2 || 3)) {
                                            return (
                                                <div key={skill.id} className="mb-3">
                                                    <img className="skill-icon ms-2 me-2 mb-2" src={skill.skill_icon} alt="" />
                                                    <span className="fw-bold text-white">{skill.skill_name}</span>
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
                </div>
            </div>
        </section>
    );
}

export default Habilidades;