import styled from 'styled-components'
import { primaryColor, colorWhite, ContentBox, Title } from '../../global.js'
import experience from '../../assets/images/bg-image.jpg'

export const Experience = styled.section`
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
    background-image: url(${experience});
    padding-top: 4.8rem !important;
    padding-bottom: 2.5rem !important;
`;

export const ExperienceBox = styled(ContentBox)`
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;

export const experienceTitle = styled(Title)`
  color: ${colorWhite} !important;
`;

export const BtnGroup = styled.div`
    max-width: 280px !important;
    margin: auto;
    display: flex;
    border-radius: 0.5rem;

    @media (max-width:991px) {
        margin-bottom: 20px;
    }    

    .btn-check:checked+.btn {
        color: white;
        background-color: ${primaryColor} !important;
        border-color: ${primaryColor} !important;
    }
`;

export const BtnCheck = styled.input`
    .&:checked+.btn,
    :not(.&)+.btn:active {
        color: white;
        background-color: ${primaryColor} !important;
    }    
`;

export const BtnLabel = styled.label`
    border: 1.5px solid ${primaryColor} !important;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    overflow: hidden;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: color, background-color;
    transition-property: color, background-color !important;
    
    @media (min-width: 768px) {
        &:hover, &:focus, &:active {
            background-color: ${primaryColor} !important;
            color: white !important;
        }
    }
`;

export const ExperienceCompany = styled.h5`
    color: ${primaryColor};
    font-weight: 700 !important;
    margin-bottom: 1.5rem !important;
`;

export const ExperienceDuration = styled.div`
    display: flex;
    align-items: center;

    @media (max-width:991px) {
        flex-direction: column;
    }
`;