import * as S from './styles'
import { Line, TitleSection } from '../../global.js'
import { works } from '../../assets/data.js'
import React, { useState } from 'react'
import Zoom from 'react-reveal/Zoom'

function Experiencia() {
    const [workList, setworkList] = useState([1]);

    const switchWork = (w) => {
        setworkList([w])
    }

    return (
        <S.Experience>
            <Zoom>
                <div className="container">
                    <TitleSection>
                        <S.experienceTitle textShadow>EXPERIÊNCIA</S.experienceTitle>
                        <Line />
                    </TitleSection>
                    <S.ExperienceBox className="row pt-5 pt-lg-4">
                        <div className="col-lg-3 col-12">
                            <S.BtnGroup className="btn-group-vertical" role="group" aria-label="Empregos">
                                <S.BtnCheck type="radio" className="btn-check" name="job" id="job1" autocomplete="off" onClick={() => switchWork(1)} />
                                <S.BtnLabel className="btn btn-outline-primary py-2" for="job1">E2S CERTIFICADORA</S.BtnLabel>

                                <S.BtnCheck type="radio" className="btn-check" name="job" id="job2" autocomplete="off" onClick={() => switchWork(2)} />
                                <S.BtnLabel className="btn btn-outline-primary py-2" for="job2">UFCA</S.BtnLabel>

                                <S.BtnCheck type="radio" className="btn-check" name="job" id="job3" autocomplete="off" onClick={() => switchWork(3)} />
                                <S.BtnLabel className="btn btn-outline-primary py-2" for="job3">MARTINS ADVOGADOS</S.BtnLabel>

                                <S.BtnCheck type="radio" className="btn-check" name="job" id="job4" autocomplete="off" onClick={() => switchWork(4)} />
                                <S.BtnLabel className="btn btn-outline-primary py-2" for="job4">FREELANCER</S.BtnLabel>
                            </S.BtnGroup>
                        </div>
                        <div className="text-center text-lg-start col-lg-9 col-12">
                            {works.map((work) => {
                                if (work.id == workList) {
                                    return (
                                        <div key={work.id} className="py-4 px-2">
                                            <S.ExperienceDuration>
                                                <h4 className="fw-bold mb-3">{work.role}</h4>
                                                <p className="ms-lg-auto mx-auto text-secondary">{work.duration}</p>
                                            </S.ExperienceDuration>
                                            <S.ExperienceCompany>{work.company}</S.ExperienceCompany>
                                            <p>{work.activities}</p>
                                        </div>
                                    )
                                }
                            }
                            )}
                        </div>
                    </S.ExperienceBox>
                </div>
            </Zoom>
        </S.Experience>
    );
}

export default Experiencia;