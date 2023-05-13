import * as S from './styles'
import { Container, Line, TitleSection } from '../../global.js'
import { works } from '../../assets/data.js'
import { useState } from 'react'
import Zoom from 'react-reveal/Zoom'
import { Radio } from 'antd'

function Experiencia() {
    const [workList, setworkList] = useState([1]);

    return (
        <S.Experience>
            <Zoom>
                <Container>
                    <TitleSection>
                        <S.experienceTitle textShadow>EXPERIÊNCIA</S.experienceTitle>
                        <Line />
                    </TitleSection>
                    <S.ExperienceBox >
                        <S.RadioGroup value={workList} onChange={(e) => setworkList(e.target.value)} style={{ display: 'flex', flexDirection: 'column' }}>
                            <Radio.Button key="1" type="primary" value={1}>MARTINS ADVOGADOS</Radio.Button>
                            <Radio.Button key="2" type="primary" value={2}>UFCA</Radio.Button>
                            <Radio.Button key="3" type="primary" value={3}>E2S CERTIFICADORA</Radio.Button>
                            <Radio.Button key="4" type="primary" value={4}>FREELANCER</Radio.Button>
                        </S.RadioGroup>

                        <S.ExperienceDesc>
                            {works.map((work) => {
                                if (work.id === parseInt(workList)) {
                                    return (
                                        <S.ExperienceWork key={work.id}>
                                            <S.ExperienceDuration>
                                                <h4>{work.role}</h4>
                                                <p>{work.duration}</p>
                                            </S.ExperienceDuration>
                                            <S.ExperienceCompany>{work.company}</S.ExperienceCompany>
                                            <p>{work.activities}</p>
                                        </S.ExperienceWork>
                                    )
                                }
                            })}
                        </S.ExperienceDesc>
                    </S.ExperienceBox >
                </Container >
            </Zoom >
        </S.Experience >
    );
}

export default Experiencia;