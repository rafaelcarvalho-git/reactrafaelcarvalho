import styled from 'styled-components'
import { primaryColor, secondaryColor, ContentBox } from '../../global.js'
import contact from '../../assets/images/bg-contato.jpg'
import { BsEnvelope, BsGeoAlt, BsPhone } from 'react-icons/bs'
import { Fade } from 'react-reveal'

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

export const ContactItem = styled.div`
    cursor: pointer;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    margin: auto;

    @media (min-width: 768px) {
        &:hover, &:focus, &:active {
          -webkit-transform: scale(1.07);
          transform: scale(1.07);
        }
      }
`;

export const ContactInfo = styled.h5`
    color: ${secondaryColor};
`;

export const ContactPhone = styled(BsPhone)`
    font-size: 48px !important;
    margin-bottom: 1rem !important;
    color: ${( {theme} ) => theme.textPrimary } !important;
`;

export const ContactGeo = styled(BsGeoAlt)`
    font-size: 48px !important;
    margin-bottom: 1rem !important;
    color: ${( {theme} ) => theme.textPrimary } !important;
`;

export const ContactMail = styled(BsEnvelope)`
    font-size: 48px !important;
    margin-bottom: 1rem !important;
    color: ${( {theme} ) => theme.textPrimary } !important;
`;

export const Footer = styled.footer`
    text-align: center;
    color: #fff;
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