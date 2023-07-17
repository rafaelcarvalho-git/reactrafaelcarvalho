import project1 from './projects-images/advocacy-system.png'
import project2 from './projects-images/siscert.png'
import project3 from './projects-images/react-rick-and-morty.png'
import project4 from './projects-images/marvel-comics.png'
import project5 from './projects-images/react-personal-trainer.png'
import project6 from './projects-images/portfolio-academia.png'
import project7 from './projects-images/react-football-matches.png'
import project8 from './projects-images/score.png'
import project9 from './projects-images/portfolio-e2s.png'

import iconhtml from './projects-images/projects-icons/html5.svg'
import iconcss from './projects-images/projects-icons/css.svg'
import iconjs from './projects-images/projects-icons/javascript.svg'
import iconbs from './projects-images/projects-icons/bootstrap.svg'
import iconphp from './projects-images/projects-icons/php.svg'
import iconmysql from './projects-images/projects-icons/mysql.svg'
import iconsqlite from './projects-images/projects-icons/sqlite.svg'
import iconreact from './projects-images/projects-icons/react.svg'
import iconhard from './projects-images/projects-icons/hardware.svg'
import iconsec from './projects-images/projects-icons/security.svg'
import iconps from './projects-images/projects-icons/photoshop.svg'
import iconcv from './projects-images/projects-icons/canva.svg'
import iconfi from './projects-images/projects-icons/figma.svg'
import icongt from './projects-images/projects-icons/github.svg'
import iconstyled from './projects-images/projects-icons/styled.svg'
import iconjava from './projects-images/projects-icons/java.svg'
import iconswing from './projects-images/projects-icons/swing.svg'
import iconantd from './projects-images/projects-icons/antd.svg'
import iconaxios from './projects-images/projects-icons/axios.svg'
import iconexpress from './projects-images/projects-icons/express.svg'

export const devicons = [
  { id: 1, icon: iconreact },
  { id: 1, icon: iconcss },
  { id: 1, icon: iconjs },
  { id: 1, icon: iconbs },
  { id: 2, icon: iconbs },
  { id: 2, icon: iconjs },
  { id: 2, icon: iconphp },
  { id: 2, icon: iconmysql },
  { id: 3, icon: iconreact },
  { id: 3, icon: iconjs },
  { id: 3, icon: iconbs },
  { id: 4, icon: iconreact },
  { id: 4, icon: iconjs },
  { id: 4, icon: iconstyled },
  { id: 4, icon: iconantd },
  { id: 5, icon: iconreact },
  { id: 5, icon: iconbs },
  { id: 6, icon: iconreact },
  { id: 6, icon: iconbs },
  { id: 7, icon: iconreact },
  { id: 7, icon: iconjs },
  { id: 7, icon: iconbs },
  { id: 8, icon: iconjava },
  { id: 8, icon: iconswing },

  { id: 9, icon: iconhtml },
  { id: 9, icon: iconcss },
  { id: 9, icon: iconjs },
  { id: 9, icon: iconbs },
  { id: 10, icon: iconaxios },
  { id: 11, icon: iconexpress },
]

export const projects = [
  {
    id: 1,
    title: 'Advocacy System',
    desc: 'Sistema para gerenciar um escritório de advocacia, colaboradores e seus processos. Com funcionalidades que ajudam a reduzir o trabalho manual dos funcionários.',
    image: project1,
    code: 'https://github.com/rafaelcarvalho-git/advocacy-system-front-end',
    live: 'https://advocacy-system-front-end.vercel.app/',
  },
  {
    id: 2,
    title: 'SisCert E2S',
    desc: 'Sistema Web interno para os parceiros solicitarem certificados digitais e terem informações sobre essas solicitações.',
    image: project2,
    code: 'https://github.com/rafaelcarvalho-git/e2sweb',
    live: 'https://www.linkedin.com/posts/rafaelcarvalho-ti_desenvolvimentoweb-frontend-backend-ugcPost-6980171319011082240-CNQ5?utm_source=share&utm_medium=member_desktop',
  },
  {
    id: 3,
    title: 'React Rick and Morty',
    desc: 'project com react para exibir os personagens da série Rick and Morty utilizando a API.',
    image: project3,
    code: 'https://github.com/rafaelcarvalho-git/rickandmorty',
    live: 'https://reactrickandmorty.web.app/',
  },
  {
    id: 4,
    title: 'Marvel Comics',
    desc: 'project com react para exibir os quadrinhos da Marvel utilizando a Marvel API.',
    image: project4,
    code: 'https://github.com/rafaelcarvalho-git/react-marvel-api',
    live: 'https://react-marvel-api.web.app/',
  },
  {
    id: 5,
    title: 'Personal Trainer',
    desc: 'Website Portfólio para Personal Trainer',
    image: project5,
    code: '',
    live: 'https://templatepersonaltrainer.web.app/',
  },
  {
    id: 1,
    title: 'Academia',
    desc: 'Website Portfólio para Academias',
    image: project6,
    code: 'https://github.com/rafaelcarvalho-git/academia',
    live: 'https://portfolio-academia.web.app/',
  },
  {
    id: 7,
    title: 'React Football Matches',
    desc: 'project com react para exibir partidas de futebol do dia ou ano.',
    image: project7,
    code: 'https://github.com/rafaelcarvalho-git/footballmatches',
    live: 'https://reactfootballmatches.web.app/',
  },
  {
    id: 8,
    title: 'Gerenciador de Partida',
    desc: 'project com Java / Swing para gerenciar uma partida de futebol.',
    image: project8,
    code: 'https://github.com/rafaelcarvalho-git/score',
    live: 'https://www.linkedin.com/posts/rafaelcarvalho-ti_java-software-activity-6895487288231497729-ToGv?utm_source=share&utm_medium=member_desktop',
  },
  {
    id: 9,
    title: 'Portfólio E2S',
    desc: 'Portfólio para exibição dos seus produtos/serviços e informações para contato e localização.',
    image: project1,
    code: 'https://github.com/rafaelcarvalho-git/e2sweb',
    live: 'https://e2s-corretoradeseguros.web.app/',
  },
]

export const skills = [
  { id: 1, skill_name: 'HTML', skill_icon: iconhtml, skill_progress: '97' },
  { id: 2, skill_name: 'CSS', skill_icon: iconcss, skill_progress: '90' },
  { id: 3, skill_name: 'JAVASCRIPT', skill_icon: iconjs, skill_progress: '72' },
  { id: 4, skill_name: 'BOOTSTRAP', skill_icon: iconbs, skill_progress: '90' },
  {
    id: 5,
    skill_name: 'REACT JS',
    skill_icon: iconreact,
    skill_progress: '75',
  },
  {
    id: 6,
    skill_name: 'ADOBE PHOTOSHOP',
    skill_icon: iconps,
    skill_progress: '65',
  },
  { id: 7, skill_name: 'FIGMA', skill_icon: iconfi, skill_progress: '50' },
  { id: 8, skill_name: 'CANVA', skill_icon: iconcv, skill_progress: '45' },
  { id: 9, skill_name: 'PHP', skill_icon: iconphp, skill_progress: '50' },
  {
    id: 10,
    skill_name: 'SQLITE',
    skill_icon: iconsqlite,
    skill_progress: '70',
  },
  {
    id: 11,
    skill_name: 'MYSQL - PHPMYADMIN',
    skill_icon: iconmysql,
    skill_progress: '70',
  },
  {
    id: 12,
    skill_name: 'HARDWARE',
    skill_icon: iconhard,
    skill_progress: '95',
  },
  {
    id: 13,
    skill_name: 'GIT - GITHUB',
    skill_icon: icongt,
    skill_progress: '70',
  },
  {
    id: 14,
    skill_name: 'SEGURANÇA DIGITAL',
    skill_icon: iconsec,
    skill_progress: '50',
  },
  {
    id: 15,
    skill_name: 'STYLED COMPONENTS',
    skill_icon: iconstyled,
    skill_progress: '85',
  },
  {
    id: 17,
    skill_name: 'ANT DESIGN',
    skill_icon: iconantd,
    skill_progress: '65',
  },
  {
    id: 18,
    skill_name: 'EXPRESS',
    skill_icon: iconexpress,
    skill_progress: '40',
  },
  { id: 19, skill_name: 'AXIOS', skill_icon: iconaxios, skill_progress: '45' },
]

export const works = [
  {
    id: 1,
    company: 'MARTINS ADVOGADOS ASSOCIADOS',
    role: 'Desenvolvedor Front-End React JS',
    duration: '(Nov 2022 - Mai 2023)',
    activities:
      'Desenvolvimento do sistema para controle de processos, clientes e advogados e geração dos contratos e minutas solicitado pelo escritório. Elaboração do layout e design do sistema e integração com o back-end. Desenvolvimento com ReactJs.',
  },
  {
    id: 2,
    company: 'NÚCLEO DE DADOS DA PRÓ-REITORIA DE EXTENSÃO (PROEX)',
    role: 'Universidade Federal do Cariri',
    duration: '(Jun 2022 - Dez 2022)',
    activities:
      'Suporte de T.I, acompanhamento e gerenciamento de planilhas de dados, criação de gráficos e indicadores de informações, criação de certificados para cursos e eventos, acompanhamento e participação na organização de eventos de extensão.',
  },
  {
    id: 3,
    company: 'AR E2S CORRETORA DE SEGUROS LTDA-ME',
    role: 'Analista de Suporte Computacional',
    duration: '(Set 2020 - Ago 2022)',
    activities:
      'Suporte de T.I, atendimento aos clientes, emissor de Certificados Digitais (AGR- Agente de Registro), treinamento dos funcionários e análise de documentos. Desenvolvimento do site portflólio e do sistema web interno da empresa.',
  },
  {
    id: 4,
    company: 'FREELANCER',
    role: 'Desenvolvedor Web - Analista de TI',
    duration: '(Jan 2022 - atualmente)',
    activities:
      'Desenvolvimento de  sistemas web e sites portfólio com React, Html, Css, Javascript, Bootstrap e Styled Components. Consultoria de TI para comércios e empresas. Montagem e manutenção de computadores, notebooks e redes.',
  },
]
