import styled from 'styled-components'
import contact from '../../assets/images/bg-contato.jpg'
import { BsEnvelope, BsGeoAlt, BsPhone } from 'react-icons/bs'

export const Contato = styled.section`
    background-image: url(${contact});
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
    color: var(--royal-blue-600);
`;

export const ContactPhone = styled(BsPhone)`
    font-size: 48px !important;
`;

export const ContactGeo = styled(BsGeoAlt)`
    font-size: 48px !important;
`;

export const ContactMail = styled(BsEnvelope)`
    font-size: 48px !important;
`;

export const Footer = styled.footer`
    text-align: center;
    color: #fff;
`;

export const FooterIcons = styled.div`
    max-width: 262px;
`;

export const Icon = styled.a`
    height: 42px;
    width: 42px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    box-shadow: 0 0 0 3px var(--royal-blue-500);
    transition: all 500ms ease;
    background-color: var(--royal-blue-500);
    color: white !important;
    margin: auto;

    &:hover {
        box-shadow: 0 0 0 3px #cde1f8;
        transition: all 500ms ease;
    }
`;