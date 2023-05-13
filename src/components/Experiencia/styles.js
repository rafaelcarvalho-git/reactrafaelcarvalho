import styled from 'styled-components'
import { primaryColor, colorWhite, ContentBox, Title } from '../../global.js'
import experience from '../../assets/images/bg-image.jpg'
import { Radio } from 'antd'

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
  
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * 0);
  margin-right: calc(-.5 * 1.5rem);
  margin-left: calc(-.5 * 1.5rem);

  & >* {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(1.5rem * .5);
    padding-left: calc(1.5rem * .5);
    margin-top: 0;
  }
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

    & h4 {
        font-weight: 700;
        margin-bottom: 1rem;
    }

    & p {
        margin-left: auto;
        margin-right: auto;
        color: rgba(108, 117, 125, 1)
    }
    @media (min-width:992px) {
        & p {          
            margin-right: 0;            
        }
    }
`;

export const ExperienceWork = styled.div`
    padding: 1.5rem .5rem 1.5rem .5rem;
`;

export const ExperienceDesc = styled.div`
    text-align: center;    
    flex: 0 0 auto;
    width: 100%;
    @media (min-width:992px) {
        text-align: left;
        flex: 0 0 auto;
        width: 75%;
    }
`;

export const RadioGroup = styled(Radio.Group)`
    background: blue;
    text-align: center;
    flex: 0 0 auto;
    width: 100%;
    @media (min-width:992px) {
        flex: 0 0 auto;
        width: 25%;
    }
`;