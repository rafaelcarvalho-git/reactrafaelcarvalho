import styled from 'styled-components'
import { ContentBox } from '../../global.js'
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

export const BtnGroup = styled.div`
    max-width: 280px !important;

    @media (max-width:991px) {
        margin-bottom: 20px;
    }
`;

export const BtnCheck = styled.input`
    .&:checked+.btn,
    :not(.&)+.btn:active {
        color: white;
        background-color: var(--royal-blue-500) !important;
    }
`;

export const BtnLabel = styled.label`
    border: 1.5px solid var(--royal-blue-400) !important;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    overflow: hidden;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: color, background-color;
    transition-property: color, background-color !important;
    
    @media (min-width: 768px) {
        &:hover, &:focus, &:active {
            background-color: var(--royal-blue-500) !important;
            color: white !important;
        }
    }
`;

export const ExperienceCompany = styled.h5`
    color: var(--royal-blue-400);
`;

export const ExperienceDuration = styled.div`
    display: flex;
    align-items: center;

    @media (max-width:991px) {
        flex-direction: column;
    }
`;