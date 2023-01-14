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
export const bgDark = "#1b1b1c"
export const bgBlack = "#252525"

export const borderLight = "#dee2e6"
export const borderDark = "#ebebeb"

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
  contentBox: bgDark,
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

  /*color: ${props => props.textColor ? colorBlack : colorWhite};*/
  
  color: ${({ theme }) => theme.textColor};

  /*color: ${({ theme }) => theme.textPrimary ? 'red' : 'blue'};*/

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
  color: ${props => `${props.textColor}`};
  background-color: ${props => `${props.bgColor}`};
  border: 1px solid ${primaryColor};

  &:hover {
    color: ${props => `${props.bgColor}`};;
    background: ${props => `${props.textColor}`};;
  }

  &:focus {
    outline: none;
  }
`;