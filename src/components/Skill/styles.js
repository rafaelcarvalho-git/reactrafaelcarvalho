import styled from 'styled-components'

export const Skill = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.contentBorder} !important;
  background-color: ${({ theme }) => theme.contentBox};
  box-shadow: 0 12px 12px rgba(33, 37, 41, 0.15) !important;
  width: 200px;
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;

  @media (min-width: 768px) {
    &:hover,
    &:focus,
    &:active {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
`

export const SkillIcon = styled.img`
  width: 46px;
`

export const SkillName = styled.h4`
  margin: 0;
`
