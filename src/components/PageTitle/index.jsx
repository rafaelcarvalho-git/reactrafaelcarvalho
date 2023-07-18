import * as S from './styles'
import { Line } from 'global'


const PageTitle = ({ title, textColor, textShadow }) => {
    return (
        <S.PageTitle>
            <S.Title textColor={textColor} textShadow={textShadow}>{title}</S.Title>
            <Line />
        </S.PageTitle>
    )
}

export default PageTitle
