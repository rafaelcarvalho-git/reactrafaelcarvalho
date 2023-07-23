import styled from 'styled-components'
import { primaryColor, ContentBox } from 'global.js'
import contact from 'assets/images/bg-contato.jpg'

export const Contact = styled.section`
  background: url(${contact}) center center / cover fixed no-repeat;
  padding-top: 64px;
  padding-bottom: 32px;
`

export const ContactTitle = styled.div`
  padding-top: 0;
  padding-bottom: 32px;

  & h2 {
    margin-top: 0;
    margin-bottom: 8.5px;
    text-align: center;
  }
`

export const ContactBox = styled(ContentBox)`
  padding-top: 16px;
  padding-bottom: 16px;
`

export const ContactOptions = styled.div`
   margin-top: 12px;
   display: flex;
   flex-wrap: wrap;

    @media(max-width: 991px) {
        flex-direction: column;
    }
}
`

export const ContactItem = styled.div`
  cursor: pointer;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  margin: auto;

  h3 {
    color: ${primaryColor};
  }

  p {
    color: #6c757d;
  }

  @media (min-width: 768px) {
    &:hover,
    &:focus,
    &:active {
      -webkit-transform: scale(1.07);
      transform: scale(1.07);
    }
  }
`

export const ContactLink = styled.a`
  margin-bottom: 24px;
  text-align: center;
  text-decoration: none;
  width: 33.33333333%;

  @media (max-width: 991px) {
    width: auto;
  }
`

export const ContactIcon = styled.div`
  font-size: 48px;
  margin-bottom: 18px;
  color: ${({ theme }) => theme.textPrimary};
`

export const Footer = styled.footer`
  text-align: center;
  color: #fff;
  padding-top: 10px;

  & p {
    margin: 0;
    padding: 0;
  }
`

export const FooterIcons = styled.div`
  max-width: 262px;
  display: flex;
  margin: auto auto 18px auto;
`

export const Icon = styled.a`
  height: 42px;
  width: 42px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  box-shadow: 0 0 0 3px ${primaryColor};
  transition: all 500ms ease;
  background-color: ${primaryColor};
  color: white;
  margin: auto;

  &:hover {
    box-shadow: 0 0 0 3px #cde1f8;
    transition: all 500ms ease;
  }
`
