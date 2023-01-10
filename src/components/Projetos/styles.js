import styled from 'styled-components'

export const Projects = styled.section`
    padding-top: 4.8rem !important;
    padding-bottom: 2.5rem !important;
`;

export const ProjectIcons = styled.div`
    max-width: 158px;
    justify-content: end;
`;

export const ProjectImage = styled.img`
    width: 100%;
    cursor: pointer;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    margin: auto;
    box-shadow: 0 .5rem 1rem rgba(33, 37, 41, .15) !important;
    border-radius: 0.375rem;

    @media (min-width: 992px) {
        width: 100%;
        max-width: 400px;

        &:hover {
            -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
        }
    }

    @media (max-width: 991px) {
        max-width: 385px;
    }

    @media (max-width: 767px) {
        ax-width: 375px;
    }

    @media (max-width: 534px) {
        max-width: 360px;
    }

    @media (max-width: 471px) {
        max-width: 340px;
    }

    @media (max-width: 371px) {
        max-width: 320px;
    }
`;