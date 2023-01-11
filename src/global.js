import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import ReactLoading from 'react-loading'

export const primaryColor = ""
export const secondaryColor = ""
export const bgLight = "#F8F9FA"
export const bgDark = "#212529"
export const bgBlack = "#1b1b1c"
export const textLightTheme = "#252525"
export const textDarkTheme = "#fff"

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
  
    }
:root {
    --color-black: #252525;
    --royal-blue-50: #f0f3fe;
    --royal-blue-100: #dce3fd;
    --royal-blue-200: #c2cffb;
    --royal-blue-300: #98b1f8;
    --royal-blue-400: #6789f3;
    --royal-blue-500: #4361ee;
    --royal-blue-600: #2d41e3;
    --royal-blue-700: #252fd0;
    --royal-blue-800: #2428a9;
    --royal-blue-900: #232885;
  }
  
  .text-shadow {
    text-shadow: 0 0 1em #252525, 0 0 1em #252525;
  }
  


  
  .btn-pattern {
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
  }
  
  .btn-pattern:focus {
    outline: none;
  }
  
  .btn-pattern.info {
    color: #fff;
    background: var(--royal-blue-500);
    border: 1px solid transparent;
  }
  
  .btn-pattern.info:hover {
    color: var(--royal-blue-500);
    border: 1px solid var(--royal-blue-500);
    background: #fff;
  }
  
  .btn-pattern.info-border {
    color: var(--royal-blue-500);
    border: 1px solid var(--royal-blue-500);
    background: #fff;
  }
  
  .btn-pattern.info-border:hover {
    color: #fff;
    background: var(--royal-blue-500);
    border: 1px solid transparent;
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
  background-color: var(--royal-blue-600);
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
  border: 1px solid #dee2e6 !important;
  padding-top: 3rem !important;
  padding-bottom: 3rem !important
`;

export const TitleSection = styled.div`
  margin-bottom: 3rem !important;
`;

export const Title = styled.h3`
  color: ${(textLightTheme)};
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center; 

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