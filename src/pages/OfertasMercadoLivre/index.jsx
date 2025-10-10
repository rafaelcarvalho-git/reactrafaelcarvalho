import React from 'react'
import * as S from './styles'
import { Container } from '../../global'
import PageTitle from '../../components/PageTitle'

// Array com os dados dos produtos
const ofertas = [
  {
    id: 1,
    nome: 'Ar Condicionado Split Hi Wall Inverter R-32 G-top Auto Gree 12.000 BTUs Só Frio Monofásico',
    imagemUrl:
      'https://http2.mlstatic.com/D_NQ_NP_2X_898001-MLA91970616685_092025-F.webp',
    link: 'https://mercadolivre.com/sec/1sovNu8',
  },
  {
    id: 10,
    nome: 'Escrivaninha Steel Mobile Star 120cm X 74cm X 45cm Home',
    imagemUrl:
      'https://http2.mlstatic.com/D_NQ_NP_2X_810920-MLB93433526775_092025-F-escrivaninha-steel-mobile-star-120cm-x-74cm-x-45cm-home.webp',
    link: 'https://mercadolivre.com/sec/1jXc7mG',
  },
  {
    id: 11,
    nome: 'Cadeira Escritório Presidente Giratória Ergonômica Tela Mesh',
    imagemUrl:
      'https://http2.mlstatic.com/D_NQ_NP_2X_887308-MLB93451629285_092025-F-cadeira-escritorio-presidente-giratoria-ergonmica-tela-mesh.webp',
    link: 'https://mercadolivre.com/sec/1XS81F5',
  },
]

const OfertasMercadoLivre = () => {
  return (
    <Container style={{ marginTop: '32px' }}>
      <PageTitle title='Ofertas do Mercado Livre' />
      <S.OfertasWrapper>
        {ofertas.map(oferta => (
          <S.OfertaCard
            key={oferta.id}
            href={oferta.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            <S.OfertaImagem src={oferta.imagemUrl} alt={oferta.nome} />
            <S.OfertaNome>{oferta.nome}</S.OfertaNome>
          </S.OfertaCard>
        ))}
      </S.OfertasWrapper>
    </Container>
  )
}

export default OfertasMercadoLivre
