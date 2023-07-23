import * as S from './styles'
import { Container } from 'global'
import { BsGithub, BsWhatsapp, BsLinkedin, BsEnvelope } from 'react-icons/bs'
import Typed from 'react-typed'
import Zoom from 'react-reveal/Zoom'

import logo from 'assets/logo.png'

const Header = () => {
    return (
        <S.Header>
            <S.HeaderContent>
                <Zoom>
                    <Container>
                        <S.HeaderSub>Hello, i'm</S.HeaderSub>
                        <S.HeaderTitle>
                            <S.LetterFloat>
                                <S.Slash style={{ marginRight: '.5rem' }}>{'<'}</S.Slash>
                                <S.Letter>R</S.Letter>
                                <S.Letter>A</S.Letter>
                                <S.Letter>F</S.Letter>
                                <S.Letter>A</S.Letter>
                                <S.Letter>E</S.Letter>
                                <S.Letter>L</S.Letter>
                            </S.LetterFloat>
                            <S.LetterFloat>
                                <S.Letter>C</S.Letter>
                                <S.Letter>A</S.Letter>
                                <S.Letter>R</S.Letter>
                                <S.Letter>V</S.Letter>
                                <S.Letter>A</S.Letter>
                                <S.Letter>L</S.Letter>
                                <S.Letter>H</S.Letter>
                                <S.Letter>O</S.Letter>
                                <S.Slash style={{ marginLeft: '.5rem' }}>{'/>'}</S.Slash>
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
                    </Container>
                </Zoom>
            </S.HeaderContent>
        </S.Header >
    );
}

export default Header;