import styled from 'styled-components'
import { textShadow } from 'global'

export const PageTitle = styled.div`
  margin-bottom: 3rem !important;
`

export const Title = styled.h3`
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  text-shadow: ${props => (props.textShadow ? textShadow : 'none')};
  color: ${theme => (theme.textColor ? 'white' : theme.textColor)};

  @media (max-width: 991px) {
    font-size: 2.3rem;
  }

  @media (max-width: 767px) {
    font-size: 2.2rem;
  }

  @media (max-width: 534px) {
    font-size: 2.1rem;
  }

  @media (max-width: 471px) {
    font-size: 2.2rem;
  }
`
