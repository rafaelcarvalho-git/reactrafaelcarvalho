import styled from 'styled-components'
import { primaryColor, ContentBox } from 'global.js'
import experience from 'assets/images/bg-image.jpg'
import { Radio } from 'antd'

export const Experience = styled.section`
  background: url(${experience}) center center / cover fixed no-repeat;
  padding-top: 56px;
  padding-bottom: 50px;
`

export const ExperienceBox = styled(ContentBox)`
  padding: 24px 36px 24px 36px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 739px) {
    padding-left: 18px;
    padding-right: 18px;
  }
`

export const ExperienceCompany = styled.h5`
  color: ${primaryColor};
  font-weight: 500 !important;
  font-size: 18px;
  margin-bottom: 24px !important;
`

export const ExperienceDuration = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    flex-direction: column;
  }

  & p {
    margin-left: auto;
    margin-right: auto;
    color: rgba(108, 117, 125, 1);
  }

  @media (min-width: 992px) {
    & p {
      margin-right: 0;
    }
  }
`

export const Activities = styled.p`
  font-size: 1.15rem;
`

export const Role = styled.h4`
  font-weight: 500;
  font-size: 18.5px;
  margin-bottom: 8px;
`

export const ExperienceWork = styled.div`
  padding: 24px 12px 24px 12px;
`

export const ExperienceDesc = styled.div`
  text-align: center;

  width: 100%;
  @media (min-width: 992px) {
    text-align: left;
  }
`

export const ExperienceOptions = styled(Radio.Group)`
  @media (max-width: 739px) {
    display: flex;
    flex-direction: column;
    text-align: center;

    * {
      border-radius: 0 !important;
    }
  }
`
