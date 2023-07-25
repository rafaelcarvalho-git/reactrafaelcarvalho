import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import ReactLoading from 'react-loading'

export const colorBlack = '#252525'
export const colorWhite = '#FFFFFF'
export const primaryColor = '#4361ee'
export const secondaryColor = '#2d41e3'
export const tertiaryColor = '#6789f3'

export const bgLight = '#F8F9FA'
export const bgDark1 = '#212529'
export const bgDark = '#1a1a1a'

export const borderLight = '#dee2e6'
export const borderDark = '#212529'

export const textLightTheme = '#252525'
export const textDarkTheme = '#fff'
export const textColor = 'white'
export const textShadow = '0 0 1em #252525, 0 0 1em #252525'

export const lightTheme = {
  body: bgLight,
  contentBox: bgLight,
  contentBorder: borderLight,
  textPrimary: textLightTheme,
  textSecondary: textDarkTheme,
}

export const darkTheme = {
  body: bgDark,
  contentBox: bgDark1,
  contentBorder: borderDark,
  textPrimary: textDarkTheme,
  textSecondary: textLightTheme,
}

export const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      padding: 0;
      font-family: 'Roboto' !important;
      text-decoration: none;
      overflow-x: hidden;  
      background-color: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.textPrimary} !important;
  }

  h1, h2, h3, h4, h5 {
    font-weight: 500;
  }

  p {
    font-weight: 300;
  }
`

export const Loading = styled(ReactLoading)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`

export const Line = styled.div`
  width: 75px;
  height: 5.2px;
  background-color: ${secondaryColor};
  margin: 0 auto;
`

export const ContentBox = styled.div`
  padding: 32px 26px;
  position: relative;
  background-color: #fff;
  margin-bottom: 32px;
  z-index: 2;
  box-shadow: 0 12px 24px rgba(33, 37, 41, 0.15) !important;
  border-radius: 12px;
  padding-top: 32px !important;
  padding-bottom: 32px !important;
  border: 1px solid ${({ theme }) => theme.contentBorder} !important;
  background-color: ${({ theme }) => theme.contentBox};
`

export const Container = styled.div`
  padding-right: calc(24px * 0.5);
  padding-left: calc(24px * 0.5);
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 740px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`
