import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import ReactLoading from 'react-loading'

export const colorBlack = "#252525"
export const colorWhite = "#FFFFFF"
export const primaryColor = "#4361ee"
export const secondaryColor = "#2d41e3"
export const tertiaryColor = "#6789f3"
export const quaternaryColor = "#f0f3fe"

export const bgLight = "#F8F9FA"
export const bgDark1 = "#212529"
export const bgDark2 = "#060606"
export const bgDark = "#1a1a1a"
export const bgBlack = "#252525"

export const borderLight = "#dee2e6"
export const borderDark = "#212529"

export const textLightTheme = "#252525"
export const textDarkTheme = "#fff"
export const textShadow = "0 0 1em #252525, 0 0 1em #252525"


export const lightTheme = {
  body: bgLight,
  contentBox: bgLight,
  contentBorder: borderLight,
  textPrimary: textLightTheme,
  textSecondary: textDarkTheme,
};

export const darkTheme = {
  body: bgDark,
  contentBox: bgDark1,
  contentBorder: borderDark,
  textPrimary: textDarkTheme,
  textSecondary: textLightTheme,
};

export const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;  
      background-color: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.textPrimary} !important;
  }
`;

export const Loading = styled(ReactLoading)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;  
`;

export const Line = styled.div`
  width: 75px;
  height: 5.2px;
  background-color: ${secondaryColor};
  margin: 0 auto;
`;

export const ContentBox = styled.div`
  padding: 3rem 1.25rem;
  position: relative;
  background-color: #fff;
  margin-bottom: 3rem;
  z-index: 2;
  box-shadow: 0 .5rem 1rem rgba(33, 37, 41, .15) !important;
  border-radius: 0.5rem;
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
  border: 1px solid ${({ theme }) => theme.contentBorder} !important;
  background-color: ${({ theme }) => theme.contentBox};
`;

export const TitleSection = styled.div`
  margin-bottom: 3rem !important;
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center; 
  text-shadow: ${props => props.textShadow ? textShadow : 'none'};
  color: ${({ theme }) => theme.textColor};

  @media (max-width: 991px) {     
      font-size: 2.4rem;    
  }

  @media (max-width: 767px) {     
      font-size: 2.3rem;    
  }

  @media (max-width: 534px) {     
      font-size: 2.2rem;     
  }
  @media (max-width: 471px) {     
      font-size: 2.1rem;    
  }
`;

export const Button = styled.a`
  display: inline-block;
  outline: none;
  line-height: 40px;
  padding: 0 30px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  background-color: ${props => props.bgPrimary ? primaryColor : 'transparent'};
  color: ${props => props.bgPrimary ? 'white' : primaryColor};  
  border: 1px solid ${primaryColor};

  &:hover {
    color: ${props => props.bgPrimary ? primaryColor : 'white'};
    background-color: ${props => props.bgPrimary ? 'transparent' : primaryColor};
  }

  &:focus {
    outline: none;
  }
`;

export const Container = styled.div`
  padding-right: calc(1.5rem * .5);
  padding-left: calc(1.5rem * .5);
  margin-right: auto;
  margin-left: auto;

  @media (min-width:576px) {
      max-width: 540px;
  }

  @media (min-width:740px) {
      max-width: 720px;
  }

  @media (min-width:992px) {
      max-width: 960px;
  }

  @media (min-width:1200px) {
      max-width: 1140px;
  }

  @media (min-width:1400px) {
      max-width: 1320px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * 0);
  margin-right: calc(-.5 * 1.5rem);
  margin-left: calc(-.5 * 1.5rem);

  & >* {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(1.5rem * .5);
    padding-left: calc(1.5rem * .5);
    margin-top: 0;
  }
`;