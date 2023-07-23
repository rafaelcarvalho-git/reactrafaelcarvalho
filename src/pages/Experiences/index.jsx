import * as S from './styles'
import { Container } from 'global.js'
import { works } from 'assets/data.js'
import { useState } from 'react'
import Zoom from 'react-reveal/Zoom'
import { Radio } from 'antd'
import PageTitle from 'components/PageTitle'


const Experiences = () => {
    const [workList, setworkList] = useState([1])

    return (
        <S.Experience>
            <Zoom>
                <Container>
                    <PageTitle title="Professional Career" textColor textShadow />
                    <S.ExperienceBox >
                        <S.ExperienceDesc>
                            {works.map((work) => {
                                if (work.id === parseInt(workList)) {
                                    return (
                                        <S.ExperienceWork key={work.id}>
                                            <S.ExperienceDuration>
                                                <S.Role>{work.role}</S.Role>
                                                <p>{work.duration}</p>
                                            </S.ExperienceDuration>
                                            <S.ExperienceCompany>{work.company}</S.ExperienceCompany>
                                            <S.Activities>{work.activities}</S.Activities>
                                        </S.ExperienceWork>
                                    )
                                }
                            })}
                        </S.ExperienceDesc>
                        <S.ExperienceOptions value={workList} defaultValue={workList} onChange={(e) => setworkList(e.target.value)}>
                            {/*<Radio.Button type="primary" value={1}>COMPASS UOL</Radio.Button>*/}
                            <Radio.Button type="primary" value={1}>MARTINS ADVOGADOS</Radio.Button>
                            <Radio.Button type="primary" value={2}>UFCA</Radio.Button>
                            <Radio.Button type="primary" value={3}>E2S CERTIFICADORA</Radio.Button>
                            <Radio.Button type="primary" value={4}>FREELANCER</Radio.Button>
                        </S.ExperienceOptions>
                    </S.ExperienceBox >
                </Container >
            </Zoom >
        </S.Experience >
    );
}

export default Experiences
