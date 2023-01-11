import styled from 'styled-components'
import { primaryColor } from '../../global.js'

export const ScrollButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    border: none;
    height: 48px;
    width: 48px;
    font-size: 22.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    transition: all 500ms ease;
    background-color: ${primaryColor};
    color: white;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;

    @media (min-width: 768px) {
        &:hover, &:focus, &:active {
            -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
        }
    }
`;