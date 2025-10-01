import styled from 'styled-components'

export const OfertasWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`

export const OfertaCard = styled.a`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`

export const OfertaImagem = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const OfertaNome = styled.h3`
  padding: 1rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
`
