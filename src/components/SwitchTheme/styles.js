import styled from 'styled-components'
import sun from '../../assets/projects-images/projects-icons/sun.svg'
import moon from '../../assets/projects-images/projects-icons/night.svg'
import { primaryColor } from '../../global.js'

export const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 64px;
    height: 36px;
    position: fixed;
    right: 20px;
    bottom: calc(100% - 64px) !important;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;

    & input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    @media (min-width: 768px) {
        &:hover, &:focus, &:active {
            -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
        }
    }
`;

export const Icon = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;

    &:before {
        position: absolute;
        content: "";
        height: 28px;
        width: 28px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        background-image: url(${sun});
        background-repeat: no-repeat;
        background-position: center;
    }

    input:checked+& {
        background-color: ${primaryColor};        
    }

    input:focus+& {
        box-shadow: 0 0 1px ${primaryColor};
    }

    input:checked+&:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
        background-image: url(${moon});
    }

    & {
        border-radius: 34px;
    }

    &:before {
        border-radius: 50%;
    }
`;