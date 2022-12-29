import './Experiencia.css'
import { works } from '../../assets/data.js'
import React, { useState } from 'react'

function Experiencia() {
    const [workList, setworkList] = useState([1]);

    const switchWork = (w) => {
        setworkList([w])
    }

    return (
        <section id="experiencia" className="bg-image sect-spacing">
            <div className="container">
                <div className="mb-5">
                    <h3 className="title-section text-white d">EXPERIÊNCIA</h3>
                    <div className="line"></div>
                </div>
                <div className="row experiencia mx-auto align-items-center box-shadow-full shadow rounded pt-5 pt-lg-4 ">
                    <div className="col-lg-3 col-12">
                        <div className="btn-group-vertical mx-auto d-flex" role="group" aria-label="Empregos">
                            <input type="radio" className="btn-check" name="job" id="job1" autocomplete="off" onClick={() => switchWork(1)} />
                            <label className="btn btn-work tn-outline-primary experiencia-hover" for="job1">E2S CERTIFICADORA</label>

                            <input type="radio" className="btn-check" name="job" id="job2" autocomplete="off" onClick={() => switchWork(2)} />
                            <label className="btn btn-work btn-outline-primary experiencia-hover" for="job2">UFCA</label>

                            <input type="radio" className="btn-check" name="job" id="job3" autocomplete="off" onClick={() => switchWork(3)} />
                            <label className="btn btn-work btn-outline-primary experiencia-hover" for="job3">MARTINS ADVOGADOS</label>
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
                                        <h5 className="primary-color fw-bold mb-4">{work.company}</h5>
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