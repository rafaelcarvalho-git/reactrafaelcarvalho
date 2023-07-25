import { Button } from 'antd'
import styled from 'styled-components'

export const Projects = styled.section`
  padding-top: 64px;
  padding-bottom: 72px;
`

export const ProjectIcons = styled.div`
  display: flex;
  gap: 8px;
`

export const ProjectImage = styled.img`
  width: 100%;
  cursor: pointer;

  margin: auto;
  box-shadow: 0 12px 1rem rgba(33, 37, 41, 0.15) !important;
  border-radius: 0.375rem;

  max-width: 400px;
`

export const ProjectInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h5 {
    font-size: 1rem;
  }
`

export const ProjectButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

export const BtnProject = styled(Button)`
  border-radius: 0 !important;
  display: flex;
  align-items: center;
  gap: 6px;
`
