import * as S from './styles'
import Fade from 'react-reveal/Fade'
import PageTitle from 'components/PageTitle'
import Skill from 'components/Skill'
import { skills } from 'assets/data'


const Skills = () => {
    return (
        <S.Skills>
            <Fade>
                <PageTitle title="My Skills" />
                <S.SkillContent>
                    {skills.map(({ skillName, skillIcon, skillInfo }) => {
                        return <Skill key={skillName} skillName={skillName} skillIcon={skillIcon} skillInfo={skillInfo} />
                    })}
                </S.SkillContent>
                <S.SkillInfos>
                    <S.SkillMouse />
                    <p>Hover the skills to see additional information</p>
                </S.SkillInfos>
            </Fade>
        </S.Skills>
    );
}

export default Skills