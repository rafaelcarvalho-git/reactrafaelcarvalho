import * as S from './styles'


const HoverInfo = ({ hoverText }) => {
    return (
        <S.HoverInfo>
            <S.HoverMouse />
            <p>{hoverText}</p>
        </S.HoverInfo>
    );
}

export default HoverInfo
