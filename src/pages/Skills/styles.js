import styled from 'styled-components'
import { primaryColor, tertiaryColor } from 'global.js'

export const Skills = styled.section`
  padding-top: 4rem !important;
  padding-bottom: 5rem !important;
`

export const SkillIcon = styled.div`
  & * {
    font-size: 48px;
    color: ${primaryColor};
    margin: auto 0.5rem auto 0.5rem !important;
    margin-right: 1rem !important;
  }
`

export const Progress = styled.div`
  height: 12.5px;
  background-color: #d9dcdf !important;
  height: 12.5px;
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
  border-radius: 0.375rem !important;
  display: flex;
  overflow: hidden;
`

export const SkillProgress = styled.div`
  background-color: ${tertiaryColor} !important;
  width: ${props => `${props.skillWidth}`}%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
`

export const Icon = styled.img`
  max-width: 32px;
  margin: auto 0.6rem 0.5rem 0.5rem !important;
`

export const SkillsAccordion = styled.div`
  border-radius: 0.5rem !important;
  background-color: ${({ theme }) => theme.contentBox};
  color: ${({ theme }) => theme.textPrimary} !important;
`

export const SkillsAccordionBtn = styled.button`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  padding-top: 25px;
  padding-bottom: 25px;
  border-color: none !important;
  border-radius: 0.5rem !important;
  border: none;
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
  box-shadow: 0 0.5rem 1rem rgba(33, 37, 41, 0.15) !important;
  background-color: ${({ theme }) => theme.contentBox};
  color: ${({ theme }) => theme.textPrimary} !important;

  @media (min-width: 768px) {
    &:hover,
    &:focus,
    &:active {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }

  &:not(.collapsed) {
    color: ${({ theme }) => theme.textPrimary} !important;
  }
`
