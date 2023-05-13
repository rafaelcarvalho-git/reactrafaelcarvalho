import styled from 'styled-components'
import { primaryColor, Button } from '../../global.js'
import { FaUserGraduate } from "react-icons/fa"

export const About = styled.section`
    padding-top: 4.8rem !important;
    padding-bottom: 2.5rem !important;
`;

export const BtnsAbout = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    
    @media (max-width: 767px) {
        justify-content: space-around;  
    }

    @media (max-width: 471px) {
        flex-direction: column !important;
    }
`;

export const BtnAbout = styled(Button)`
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
    border-radius: 0.5rem;
    margin: auto;

    @media (max-width: 991px) {
        max-width: 310px;
        margin-bottom: 28px;
    }

    @media (max-width: 767px) {
        max-width: 285px;
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

export const AboutParagraph = styled.p`
    margin-top: 1rem;    
    font-size: 1.25rem;
    font-weight: 300;
`;

export const AboutIcon = styled(FaUserGraduate)`
    font-size: 24px;
    color: ${primaryColor};
    margin-right: 10px;
`;

export const AboutGraduation = styled.div`
    display: flex;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`;

export const AboutPhoto = styled.div`
    text-align: center;
    flex: 0 0 auto;
    width: 100%;
    @media (min-width:992px) {
        flex: 0 0 auto;
        width: 41.66666667%;
    }
`;

export const AboutDesc = styled.div`
    flex: 0 0 auto;
    width: 100%;
    @media (min-width:992px) {
        flex: 0 0 auto;
        width: 58.33333333%;
    }
`;

export const AboutInfo = styled.div`
    padding-top: 1.5rem;

    @media (min-width:768px) {
        padding-top: 0;
    }
`;