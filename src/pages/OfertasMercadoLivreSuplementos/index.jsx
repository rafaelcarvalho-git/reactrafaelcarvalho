import React from 'react'
import * as S from './styles'
import { Container } from '../../global'
import PageTitle from '../../components/PageTitle'

// Array com os dados dos produtos
const ofertas = [
  {
    id: 1,
    nome: 'Hipercalórico Anabolic Mass 28500 3kg Profit Labs (vários sabores)',
    imagemUrl:
      'https://http2.mlstatic.com/D_NQ_NP_967421-MLA82553343283_022025-O.webp',
    link: 'https://mercadolivre.com/sec/2nX1v2G',
  },
  {
    id: 2,
    nome: 'Creatina Monohidratada 600g 100% Pura Soldiers Nutrition',
    imagemUrl:
      'https://http2.mlstatic.com/D_NQ_NP_956053-MLA90624872959_082025-O.webp',
    link: 'https://mercadolivre.com/sec/22NXK3f',
  },
  {
    id: 3,
    nome: 'Creatina Monohidratada 500g Soldiers Nutrition Sabor Natural',
    imagemUrl:
      'https://http2.mlstatic.com/D_NQ_NP_752137-MLA90625178349_082025-O.webp',
    link: 'https://mercadolivre.com/sec/1CyQzuF',
  },
  {
    id: 4,
    nome: 'Creatina Monohidratada 1Kg 100% Pura Soldiers Nutrition Sem sabor',
    imagemUrl:
      'https://http2.mlstatic.com/D_NQ_NP_775872-MLA90244047932_082025-O.webp',
    link: 'https://mercadolivre.com/sec/2BEw3zj',
  },
  {
    id: 5,
    nome: 'Whey Pro Baunilha Max Titanium Protein Pro Com Bcaa E Aminoácidos',
    imagemUrl:
      'https://http2.mlstatic.com/D_NQ_NP_848814-MLA86784331999_062025-O.webp',
    link: 'https://mercadolivre.com/sec/2dWnrrK',
  },
  {
    id: 6,
    nome: 'Suplemento Em Pasta Dr. Peanut Power Cream Proteínas Sabor Avelã Em Pote De 600g',
    imagemUrl:
      'https://http2.mlstatic.com/D_NQ_NP_810088-MLA89577598275_082025-O.webp',
    link: 'https://mercadolivre.com/sec/29QMbfJ',
  },
]

const OfertasMercadoLivreSuplementos = () => {
  return (
    <Container style={{ marginTop: '32px' }}>
      <PageTitle title='Ofertas Suplementos' />
      <p style={{ textAlign: 'center' }}>
        Clique nos itens para ser redirecionado para o Mercado Livre e obter
        descontos nos produtos.
      </p>
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

export default OfertasMercadoLivreSuplementos
