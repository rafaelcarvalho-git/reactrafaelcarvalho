import styled from 'styled-components'
import { primaryColor } from 'global.js'
import { Button } from 'antd'
import { FaUserGraduate } from 'react-icons/fa'

export const About = styled.section`
  padding-top: 64px;
`

export const AboutTitle = styled.div`
  margin-bottom: 12px;

  *:not(h2) {
    margin: 0;
  }
`

export const BtnsAbout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: 767px) {
    justify-content: space-around;
  }

  @media (max-width: 471px) {
    flex-direction: column;
  }
`

export const BtnAbout = styled(Button)`
  width: 180px;
  border-radius: 0 !important;

  @media (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 471px) {
    width: 80%;
  }
`

export const AboutImage = styled.img`
  max-width: 328px;
  width: 100%;
  border-radius: 8px;
  margin: auto;
`

export const AboutPhoto = styled.div`
  text-align: center;
  width: 100%;
`

export const AboutParagraph = styled.p`
  margin-top: 12px;
  font-size: 1.25rem;
`

export const AboutIcon = styled(FaUserGraduate)`
  font-size: 24px;
  color: ${primaryColor};
`

export const AboutGraduation = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
  margin-bottom: 24px;
  font-size: 1.05rem;
`

export const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding-top: 0;
  }

  h2 {
    margin-bottom: 8.5px;
  }
`
