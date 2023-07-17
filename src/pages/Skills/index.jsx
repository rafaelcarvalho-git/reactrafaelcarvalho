import * as S from './styles'
import { skills } from 'assets/data.js'
import Fade from 'react-reveal/Fade'
import PageTitle from 'components/PageTitle'
import { Col, Row } from 'antd'
import { BsBraces, BsLaptop, BsCodeSquare } from 'react-icons/bs'
import { VscServerProcess } from 'react-icons/vsc'

const Skills = () => {
    return (
        <S.Skills>
            <Fade>
                <PageTitle title="My Skills" />
                <Row gutter={24} className="accordion accordion-flush" id="accordionSkills">
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} className='mb-5 px-4'>
                        <S.SkillsAccordion>
                            <h2 className="accordion-header d-flex" id="flush-headingOne">
                                <S.SkillsAccordionBtn className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <S.SkillIcon><BsBraces /></S.SkillIcon> Front-end developer
                                </S.SkillsAccordionBtn>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                                data-bs-parent="#accordionSkills">
                                <div className="accordion-body mt-4">
                                    {skills.map((skill) => {
                                        if ([1, 2, 15, 4, 5, 3, 19, 17].includes(skill.id)) {
                                            return (
                                                <div key={skill.id} style={{ marginBottom: '1rem' }}>
                                                    <S.Icon src={skill.skill_icon} alt={skill.skill_name} />
                                                    <span className="fw-bold">{skill.skill_name}</span>
                                                    <S.Progress>
                                                        <S.SkillProgress skillWidth={skill.skill_progress} role="progressbar"></S.SkillProgress>
                                                    </S.Progress>
                                                </div>
                                            )
                                        }
                                    }
                                    )}
                                </div>
                            </div>
                        </S.SkillsAccordion>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <S.SkillsAccordion>
                            <h2 className="accordion-header d-flex" id="flush-headingTwo">
                                <S.SkillsAccordionBtn className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    <S.SkillIcon><BsLaptop /></S.SkillIcon> Back-end developer
                                </S.SkillsAccordionBtn>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                                data-bs-parent="#accordionSkills">
                                <div className="accordion-body mt-4">
                                    {skills.map((skill) => {
                                        if ([18, 9, 10, 11].includes(skill.id)) {
                                            return (
                                                <div key={skill.id} style={{ marginBottom: '1rem' }}>
                                                    <S.Icon src={skill.skill_icon} alt={skill.skill_name} />
                                                    <span className="fw-bold">{skill.skill_name}</span>
                                                    <S.Progress>
                                                        <S.SkillProgress skillWidth={skill.skill_progress} role="progressbar"></S.SkillProgress>
                                                    </S.Progress>
                                                </div>
                                            )
                                        }
                                    }
                                    )}
                                </div>
                            </div>
                        </S.SkillsAccordion>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <S.SkillsAccordion>
                            <h2 className="accordion-header d-flex" id="flush-headingThree">
                                <S.SkillsAccordionBtn className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <S.SkillIcon><BsCodeSquare /></S.SkillIcon> Web Designer
                                </S.SkillsAccordionBtn>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                                data-bs-parent="#accordionSkills">
                                <div className="accordion-body mt-4">
                                    {skills.map((skill) => {
                                        if ([6, 7, 8].includes(skill.id)) {
                                            return (
                                                <div key={skill.id} style={{ marginBottom: '1rem' }}>
                                                    <S.Icon src={skill.skill_icon} alt={skill.skill_name} />
                                                    <span className="fw-bold">{skill.skill_name}</span>
                                                    <S.Progress>
                                                        <S.SkillProgress skillWidth={skill.skill_progress} role="progressbar"></S.SkillProgress>
                                                    </S.Progress>
                                                </div>
                                            )
                                        }
                                    }
                                    )}
                                </div>
                            </div>
                        </S.SkillsAccordion>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <S.SkillsAccordion>
                            <h2 className="accordion-header d-flex" id="flush-headingFour">
                                <S.SkillsAccordionBtn className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    <S.SkillIcon><VscServerProcess /></S.SkillIcon>  Information Technology
                                </S.SkillsAccordionBtn>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                                data-bs-parent="#accordionSkills">
                                <div className="accordion-body mt-4">
                                    {skills.map((skill) => {
                                        if ([12, 13, 14, 16].includes(skill.id)) {
                                            return (
                                                <div key={skill.id} style={{ marginBottom: '1rem' }}>
                                                    <S.Icon src={skill.skill_icon} alt={skill.skill_name} />
                                                    <span className="fw-bold">{skill.skill_name}</span>
                                                    <S.Progress>
                                                        <S.SkillProgress skillWidth={skill.skill_progress} role="progressbar"></S.SkillProgress>
                                                    </S.Progress>
                                                </div>
                                            )
                                        }
                                    }
                                    )}
                                </div>
                            </div>
                        </S.SkillsAccordion>
                    </Col>
                </Row>
            </Fade>
        </S.Skills>
    );
}

export default Skills