import * as S from './styles'
import { Tooltip } from 'antd'


const Skill = ({ skillName, skillIcon, skillInfo }) => {
    return (
        <Tooltip title={skillInfo}>
            <S.Skill>
                <S.SkillIcon src={skillIcon} alt={skillName} />
                <S.SkillName>{skillName}</S.SkillName>
            </S.Skill>
        </Tooltip>

    );
}

export default Skill
