import './Habilidades.css'
import * as S from './styles'
import { Line, TitleSection, Title } from '../../global.js'
import { skills } from '../../assets/data.js'
import Fade from 'react-reveal/Fade'

function Habilidades() {
    return (
        <S.Skills className="habilidades">
            <Fade>
                <div className="container">
                    <TitleSection>
                        <Title>HABILIDADES</Title>
                        <Line />
                    </TitleSection>
                    <div className="accordion accordion-flush row" id="accordionHabilidades">
                        <Fade left>
                            <div className="col-12 col-lg-6 mb-5 px-4">
                                <div className="accordion-item rounded">
                                    <h2 className="accordion-header d-flex" id="flush-headingOne">
                                        <S.SkillsAccordionBtn className="accordion-button collapsed rounded shadow-full shadow" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            <S.SkillIcon className="mx-2 me-3 my-auto" /> Front-end developer
                                        </S.SkillsAccordionBtn>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                                        data-bs-parent="#accordionHabilidades">
                                        <div className="accordion-body mt-4">
                                            {skills.map((skill) => {
                                                if ([1, 2, 15, 4, 5].includes(skill.id)) {
                                                    return (
                                                        <div key={skill.id} className="mb-3">
                                                            <S.Icon className=" ms-2 me-2 mb-2" src={skill.skill_icon} alt="" />
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
                                        <S.SkillsAccordionBtn className="accordion-button collapsed rounded shadow-full shadow" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            <S.SkillIcon2 className="mx-2 me-3 my-auto" /> Back-end developer
                                        </S.SkillsAccordionBtn>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                                        data-bs-parent="#accordionHabilidades">
                                        <div className="accordion-body mt-4">
                                            {skills.map((skill) => {
                                                if ([3, 9, 10, 11].includes(skill.id)) {
                                                    return (
                                                        <div key={skill.id} className="mb-3">
                                                            <S.Icon className=" ms-2 me-2 mb-2" src={skill.skill_icon} alt="" />
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
                                        <S.SkillsAccordionBtn className="accordion-button collapsed rounded shadow-full shadow" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            <S.SkillIcon3 className="mx-2 me-3 my-auto" /> Web Designer
                                        </S.SkillsAccordionBtn>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                                        data-bs-parent="#accordionHabilidades">
                                        <div className="accordion-body mt-4">
                                            {skills.map((skill) => {
                                                if ([6, 7, 8].includes(skill.id)) {
                                                    return (
                                                        <div key={skill.id} className="mb-3">
                                                            <S.Icon className=" ms-2 me-2 mb-2" src={skill.skill_icon} alt="" />
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
                                        <S.SkillsAccordionBtn className="accordion-button collapsed rounded shadow-full shadow" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            <S.SkillIcon4 className="mx-2 me-3 my-auto" /> Information Technology
                                        </S.SkillsAccordionBtn>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                                        data-bs-parent="#accordionHabilidades">
                                        <div className="accordion-body mt-4">
                                            {skills.map((skill) => {
                                                if ([12, 13, 14, 16].includes(skill.id)) {
                                                    return (
                                                        <div key={skill.id} className="mb-3">
                                                            <S.Icon src={skill.skill_icon} alt="" />
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
        </S.Skills>
    );
}

export default Habilidades;