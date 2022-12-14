import styled from 'styled-components'
import { FaUserGraduate } from "react-icons/fa"

export const About = styled.section`
    padding-top: 4.8rem !important;
    padding-bottom: 2.5rem !important;
`;

export const BtnsAbout = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    @media (max-width: 767px) {
        justify-content: space-around;  
    }

    @media (max-width: 471px) {
        flex-direction: column !important;
    }
`;

export const BtnAbout = styled.a`
    max-width: 200px !important;

    @media (max-width: 767px) {
        margin-left: auto;
        margin-right: auto;    
    }

    @media (max-width: 471px) {
        margin-bottom: 12.5px !important;
    }
`;

export const AboutImage = styled.img`
    max-width: 328px;
    width: 100%;

    @media (max-width: 991px) {
        max-width: 310px;
        margin-bottom: 28px;
    }

    @media (max-width: 767px) {
        -width: 285px;
    }

    @media (max-width: 534px) {
        max-width: 278px;
    }

    @media (max-width: 471px) {
        max-width: 262px;
    }

    @media (max-width: 418px) {
        max-width: 258px;
    }

    @media (max-width: 382px) {
        max-width: 248px;
    }
`;

export const AboutIcon = styled(FaUserGraduate)`
    font-size: 24px;
    color: var( --royal-blue-600);
    margin-right: 10px;
`;