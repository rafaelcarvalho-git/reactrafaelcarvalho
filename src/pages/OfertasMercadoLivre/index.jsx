import React from 'react'
import * as S from './styles'
import { Container } from '../../global'
import PageTitle from '../../components/PageTitle'

// Array com os dados dos produtos
const ofertas = [
  {
    id: 1,
    nome: 'Kit C/12 Utensílios De Cozinha Silicone Cabo Madeira',
    imagemUrl:
      'https://http2.mlstatic.com/D_NQ_NP_912654-MLB71781728024_092023-O-kit-c12-utensilios-de-cozinha-silicone-cabo-madeira.webp',
    link: 'https://mercadolivre.com/sec/1y8zc3N',
  },
  {
    id: 2,
    nome: 'Mop Spray Com reservatório esfregão vassoura mágica cor cinza',
    imagemUrl:
      'https://http2.mlstatic.com/D_NQ_NP_818343-MLA86522406776_062025-O.webp',
    link: 'https://mercadolivre.com/sec/17oSrF3',
  },
  {
    id: 3,
    nome: 'Jogo 6 Copos Baixos Diamond 300ml Vidro Grosso Diamante Luxo',
    imagemUrl:
      'https://http2.mlstatic.com/D_NQ_NP_739793-MLB81210361701_122024-O-jogo-6-copos-baixos-diamond-300ml-vidro-grosso-diamante-luxo.webp',
    link: 'https://mercadolivre.com/sec/1sxvmxc',
  },
  {
    id: 4,
    nome: 'Porta Temperos Giratório Com 9 Potes De Vidro Cor Preto',
    imagemUrl:
      'https://http2.mlstatic.com/D_NQ_NP_883003-MLU74608205933_022024-O.webp',
    link: 'https://mercadolivre.com/sec/21tEZRK',
  },
  {
    id: 5,
    nome: 'Jogo 6 Taças Diamante Vidro 340ml Copo Diamond Moderno Luxo Transparente',
    imagemUrl:
      'https://http2.mlstatic.com/D_NQ_NP_793364-MLB82557023891_022025-O.webp',
    link: 'https://mercadolivre.com/sec/1d3VY63',
  },
  {
    id: 6,
    nome: 'Faqueiro De Aço Inox Siena 20 Peças Brinox 5109/455 Cor Prateado',
    imagemUrl:
      'https://http2.mlstatic.com/D_NQ_NP_933645-MLA88232290362_072025-O.webp',
    link: 'https://mercadolivre.com/sec/334j7PF',
  },
  {
    id: 7,
    nome: 'Kit 5 Utensílios Para Cozinha 100% Aço Inox 25cm',
    imagemUrl:
      'https://http2.mlstatic.com/D_NQ_NP_949557-MLB80824057552_122024-O-kit-5-utensilios-para-cozinha-100-aco-inox-25cm.webp',
    link: 'https://mercadolivre.com/sec/2hQLL6g',
  },
  {
    id: 8,
    nome: 'Relógio Redondo 23cm Cor da estrutura Cromado Cor do fundo Preto',
    imagemUrl:
      'https://http2.mlstatic.com/D_NQ_NP_843565-MLA93502171519_092025-O.webp',
    link: 'https://mercadolivre.com/sec/2esccGp',
  },
  {
    id: 9,
    nome: 'Lixeira 3 Litros Em Aço Inox Com Pedal e Cesto Removível – Design Moderno, Resistente e Higiênico Para Banheiro, Cozinha, Escritório e Espaços Compactos',
    imagemUrl:
      'https://http2.mlstatic.com/D_NQ_NP_646972-MLA92293648764_092025-O.webp',
    link: 'https://mercadolivre.com/sec/28tyqua',
  },
  {
    id: 10,
    nome: 'Jogo Refratário 3 Assadeiras Marinex Retangulares Nadir Cor Vidro',
    imagemUrl:
      'https://http2.mlstatic.com/D_NQ_NP_921764-MLU73707508374_012024-O.webp',
    link: 'https://mercadolivre.com/sec/2tQNju1',
  },
  {
    id: 11,
    nome: 'Aspirador De Pó Vertical E Portátil Wap High Speed Plus 1350w 1,2 Litros Filtro Hepa Tecnologia Cyclone 3 Em 1',
    imagemUrl:
      'https://http2.mlstatic.com/D_NQ_NP_642977-MLU73666654790_012024-O.webp',
    link: 'https://mercadolivre.com/sec/2LUTkvp',
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
