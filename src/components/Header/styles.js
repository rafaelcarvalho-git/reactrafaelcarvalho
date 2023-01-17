import styled from 'styled-components'
import { textShadow, primaryColor } from '../../global.js'
import header from '../../assets/images/bg-image.jpg'

export const Header = styled.header`
    height: 100vh;
    position: relative;
    color: #fff;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
    background-image: url(${header});    
    display: flex;
    justify-content: center !important;
`;

export const HeaderContent = styled.div`
    text-align: center;
    display: flex;  
    align-items: center;
`;

export const HeaderTitle = styled.h1`
    color: #fff;
    font-weight: 600;
    font-size: 4.5rem;
    max-width: 820px;
    display: flex;
    margin auto;
    margin-bottom: 1.5rem;
    justify-content: center;
    text-shadow: ${props => props.textShadow ? textShadow : 'none'};

    @media (max-width: 991px) {
        font-size: 3.8rem;
    }
    
    @media (max-width: 767px) {
        font-size: 2.850rem;
        max-width: 400px;
    }

    @media (max-width: 534px) {
        font-size: 2.5rem;  
    }

    @media (max-width: 471px) {
        font-size: 2.2rem;
        max-width: 300px;
    }

    @media (max-width: 418px) {
        font-size: 2rem;
    }
    
    @media (max-width: 382px) {      
        font-size: 1.6rem;
        max-width: 150px;
    }
    
    @media (max-width: 318px) {
        font-size: 1.4rem;
    }
`;

export const HeaderSub = styled.p`
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.1;

    @media (max-width: 534px) {
        font-size: 1.8rem;
    }

    @media (max-width: 418px) {        
        font-size: 1.650rem !important;
    }

    @media (max-width: 382px) {        
        font-size: 1.5rem !important;
    }

    @media (max-width: 318px) {        
        font-size: 1.3rem !important;
    }
`;

export const HeaderSubtitle = styled.p`
    font-size: 1.5rem;
    font-weight: 300;
`;

export const LetterFloat = styled.div`
    display: flex;
    margin-left: 1rem !important;    
`;

export const Letter = styled.div`
    cursor: pointer;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    margin-left: 0.8;
    margin-right: 0.8px;

    @media (min-width: 768px) {
        &:hover, &:focus, &:active {
            -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
        }
    }
`;

export const Slash = styled.span`
    color: ${primaryColor};
    cursor: pointer;
    margin: auto;
`;

export const HeaderIcons = styled.div`
    color: ${primaryColor};
    cursor: pointer;
    margin: 48px auto 48px auto;
    display: flex;
    max-width: 275px;

    @media (max-width: 471px) {     
        width: 250px !important;         
    }

    @media (max-width: 382px) {
        width: 230px !important;
    }
`;

export const Icon = styled.a`
    font-size: 32px;
    color: white;
    text-shadow: 0 0 0.2em black, 0 0 0.2em white !important;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    margin: auto;

    @media (max-width: 534px) {
        font-size: 30px !important;
        margin-top: 32px !important;
    }

    @media (max-width: 471px) {    
        font-size: 30px !important;       
    }

    @media (max-width: 382px) {
        font-size: 28px !important;       
    }

    &:hover, &:focus, &:active {
        color: ${primaryColor};
        -webkit-transform: scale(1.120);
        transform: scale(1.120);
    }
`;