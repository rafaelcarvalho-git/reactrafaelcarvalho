import * as S from './styles'
import { BsGithub, BsWhatsapp, BsLinkedin, BsEnvelope } from 'react-icons/bs'
import Typed from 'react-typed'
import Zoom from 'react-reveal/Zoom'

const x = "< ";
const y = " />";

function Header() {
    return (
        <S.Header id="home">
            <S.HeaderContent>
                <Zoom>
                    <div className="container">
                        <S.HeaderSub textShadow>Olá, eu sou</S.HeaderSub>
                        <S.HeaderTitle textShadow>
                            <S.LetterFloat className="ms-3">
                                <S.Slash className="me-2">{x}</S.Slash>
                                <S.Letter>R</S.Letter>
                                <S.Letter>A</S.Letter>
                                <S.Letter>F</S.Letter>
                                <S.Letter>A</S.Letter>
                                <S.Letter>E</S.Letter>
                                <S.Letter>L</S.Letter>
                            </S.LetterFloat>
                            <S.LetterFloat className="ms-3 me-3">
                                <S.Letter>C</S.Letter>
                                <S.Letter>A</S.Letter>
                                <S.Letter>R</S.Letter>
                                <S.Letter>V</S.Letter>
                                <S.Letter>A</S.Letter>
                                <S.Letter>L</S.Letter>
                                <S.Letter>H</S.Letter>
                                <S.Letter>O</S.Letter>
                                <S.Slash className="ms-2">{y}</S.Slash>
                            </S.LetterFloat>
                        </S.HeaderTitle>
                        <S.HeaderSubtitle textShadow>
                            <Typed strings={['Web Developer',
                                'System Analyst',
                                'Information Technician',
                                'Technology Lover ❤']}
                                typeSpeed={50}
                                backSpeed={60} loop />
                        </S.HeaderSubtitle>
                        <S.HeaderIcons>
                            <S.Icon target="_blank" rel="noreferrer noopener" href="https://github.com/rafaelcarvalho-git"><BsGithub /></S.Icon>
                            <S.Icon target="_blank" rel="noreferrer noopener" href="https://api.whatsapp.com/send/?phone=5588988573004&text&app_absent=0"><BsWhatsapp /></S.Icon>
                            <S.Icon target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/rafaelcarvalho-ti/"><BsLinkedin /></S.Icon>
                            <S.Icon target="_blank" rel="noreferrer noopener" href="mailto:rafaskyplay@gmail.com"><BsEnvelope /></S.Icon>
                        </S.HeaderIcons>
                    </div>
                </Zoom>
            </S.HeaderContent>
        </S.Header >
    );
}

export default Header;