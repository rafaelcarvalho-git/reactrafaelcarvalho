import styled from 'styled-components'
import { primaryColor, ContentBox } from '../../global.js'
import contact from '../../assets/images/bg-contato.jpg'
import { BsEnvelope, BsGeoAlt, BsPhone } from 'react-icons/bs'

export const Contato = styled.section`
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
    background-image: url(${contact});
    padding-top: 4.8rem !important;
    padding-bottom: 2.5rem !important;
`;

export const ContactBox = styled(ContentBox)`
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
`;

export const ContactItems = styled.div`
    margin-top: .5rem !important;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * 0);
    margin-right: calc(-.5 * 1.5rem);
    margin-left: calc(-.5 * 1.5rem);

    & >* {
        flex-shrink: 0;
        width: 100%;
        max-width: 100%;
        padding-right: calc(var(--bs-gutter-x) * .5);
        padding-left: calc(var(--bs-gutter-x) * .5);
        margin-top: var(--bs-gutter-y)
    }

    @media(max-width:739px) {
        flex-direction: column;
        align-items:center;
    }
`;

export const ContactItem = styled.div`
    cursor: pointer;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    margin: auto;

    h5 {
        color: ${primaryColor} !important;
    }

    & p {
        color: #6c757d;
    }

    @media (min-width: 768px) {
        &:hover, &:focus, &:active {
          -webkit-transform: scale(1.07);
          transform: scale(1.07);
        }
      }
`;

export const ContactLink = styled.a`
   /* flex: 0 0 auto !important;
    width: 33.33333333% !important;   */ 
    margin-bottom: 1.5rem !important;
    text-align: center;
    text-decoration: none;
`;

export const ContactPhone = styled(BsPhone)`
    font-size: 48px !important;
    margin-bottom: 1rem !important;
    color: ${({ theme }) => theme.textPrimary} !important;
`;

export const ContactGeo = styled(BsGeoAlt)`
    font-size: 48px !important;
    margin-bottom: 1rem !important;
    color: ${({ theme }) => theme.textPrimary} !important;
`;

export const ContactMail = styled(BsEnvelope)`
    font-size: 48px !important;
    margin-bottom: 1rem !important;
    color: ${({ theme }) => theme.textPrimary} !important;
`;

export const Footer = styled.footer`
    text-align: center;
    color: #fff;

    & p {
        margin: 0;
        padding: 0;
    }
`;

export const FooterIcons = styled.div`
    max-width: 262px;
    display: flex;
    margin: auto auto 1rem auto;
`;

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
    color: white !important;
    margin: auto;

    &:hover {
        box-shadow: 0 0 0 3px #cde1f8;
        transition: all 500ms ease;
    }
`;