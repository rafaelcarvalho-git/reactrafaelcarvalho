import project1 from './projects-images/advocacy-system.png'
import project2 from './projects-images/siscert.png'
import project3 from './projects-images/react-rick-and-morty.png'
import project4 from './projects-images/marvel-comics.png'
import project5 from './projects-images/react-personal-trainer.png'
import project6 from './projects-images/portfolio-academia.png'
import project7 from './projects-images/score.png'
import project8 from './projects-images/portfolio-e2s.png'

import iconhtml from './projects-images/projects-icons/html5.svg'
import iconcss from './projects-images/projects-icons/css.svg'
import iconjs from './projects-images/projects-icons/javascript.svg'
import iconbs from './projects-images/projects-icons/bootstrap.svg'
import iconphp from './projects-images/projects-icons/php.svg'
import iconmysql from './projects-images/projects-icons/mysql.svg'
import iconsqlite from './projects-images/projects-icons/sqlite.svg'
import iconreact from './projects-images/projects-icons/react.svg'
import iconhard from './projects-images/projects-icons/hardware.svg'
import icongt from './projects-images/projects-icons/github.svg'
import iconstyled from './projects-images/projects-icons/styled.svg'
import iconjava from './projects-images/projects-icons/java.svg'
import iconswing from './projects-images/projects-icons/swing.svg'
import iconantd from './projects-images/projects-icons/antd.svg'
import iconaxios from './projects-images/projects-icons/axios.svg'
import iconexpress from './projects-images/projects-icons/express.svg'
import iconnode from './projects-images/projects-icons/node.svg'
import iconmui from './projects-images/projects-icons/mui.svg'
import iconsass from './projects-images/projects-icons/sass.svg'
import iconangular from './projects-images/projects-icons/angular.svg'

export const devicons = [
  { id: 1, icon: iconreact },
  { id: 1, icon: iconantd },
  { id: 1, icon: iconmui },
  { id: 1, icon: iconnode },
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
  { id: 7, icon: iconjava },
  { id: 7, icon: iconswing },
  { id: 8, icon: iconbs },
  { id: 8, icon: iconhtml },
  { id: 8, icon: iconcss },
  { id: 8, icon: iconjs },
]

export const projects = [
  {
    id: 1,
    title: 'Advocacy System',
    desc: 'System to manage a law firm, employees and their processes. With functionalities that help to reduce the manual work of the employees.',
    image: project1,
    code: 'https://github.com/rafaelcarvalho-git/advocacy-system-front-end',
    live: 'https://advocacy-system-front-end.vercel.app/',
  },
  {
    id: 2,
    title: 'SisCert E2S',
    desc: 'Internal web system for AGRs and partners to request digital certificates and have information about these requests.',
    image: project2,
    code: 'https://github.com/rafaelcarvalho-git/e2sweb',
    live: 'https://www.linkedin.com/posts/rafaelcarvalho-ti_desenvolvimentoweb-frontend-backend-ugcPost-6980171319011082240-CNQ5?utm_source=share&utm_medium=member_desktop',
  },
  {
    id: 3,
    title: 'React Rick and Morty',
    desc: 'Personal project with react to display the characters from the Rick and Morty series using the API.',
    image: project3,
    code: 'https://github.com/rafaelcarvalho-git/rickandmorty',
    live: 'https://reactrickandmorty.web.app/',
  },
  {
    id: 4,
    title: 'Marvel Comics',
    desc: 'Personal project with react to display Marvel comics using the Marvel API.',
    image: project4,
    code: 'https://github.com/rafaelcarvalho-git/react-marvel-api',
    live: 'https://react-marvel-api.web.app/',
  },
  {
    id: 5,
    title: 'Personal Trainer',
    desc: 'A personal trainer website portfolio.',
    image: project5,
    code: '',
    live: 'https://templatepersonaltrainer.web.app/',
  },
  {
    id: 6,
    title: 'React Gym',
    desc: 'Website portfolio for Gyms.',
    image: project6,
    code: 'https://github.com/rafaelcarvalho-git/academia',
    live: 'https://portfolio-academia.web.app/',
  },
  {
    id: 7,
    title: 'Score',
    desc: 'Project with Java / Swing to manage a football match.',
    image: project7,
    code: 'https://github.com/rafaelcarvalho-git/score',
    live: 'https://www.linkedin.com/posts/rafaelcarvalho-ti_java-software-activity-6895487288231497729-ToGv?utm_source=share&utm_medium=member_desktop',
  },
  {
    id: 8,
    title: 'Portfólio E2S',
    desc: 'Portfolio to showcase your products / services and contact and location information.',
    image: project8,
    code: 'https://github.com/rafaelcarvalho-git/e2sweb',
    live: 'https://e2s-corretoradeseguros.web.app/',
  },
]

export const skills = [
  {
    skillName: 'React JS',
    skillIcon: iconreact,
    skillInfo:
      'Some simple libs i used: React Router Dom, React Icons, React Loading, React Countup, React Paginate, React Typed, React Reveal',
  },
  { skillName: 'Angular', skillIcon: iconangular, skillInfo: '' },
  { skillName: 'Node JS', skillIcon: iconnode, skillInfo: '' },
  { skillName: 'Material UI', skillIcon: iconmui, skillInfo: '' },
  { skillName: 'Ant Design', skillIcon: iconantd, skillInfo: '' },
  { skillName: 'Javascript', skillIcon: iconjs, skillInfo: '' },
  { skillName: 'Bootstrap', skillIcon: iconbs, skillInfo: '' },
  {
    skillName: 'Css in JS',
    skillIcon: iconstyled,
    skillInfo: 'Styled-Components',
  },
  { skillName: 'Sass', skillIcon: iconsass, skillInfo: '' },
  { skillName: 'Express', skillIcon: iconexpress, skillInfo: '' },
  { skillName: 'Php', skillIcon: iconphp, skillInfo: '' },
  { skillName: 'Axios', skillIcon: iconaxios, skillInfo: '' },
  { skillName: 'MySQL', skillIcon: iconmysql, skillInfo: '' },
  { skillName: 'SQLite', skillIcon: iconsqlite, skillInfo: '' },
  { skillName: 'Git - Github', skillIcon: icongt, skillInfo: '' },
  {
    skillName: 'T.I',
    skillIcon: iconhard,
    skillInfo: 'Hardware, Network, Security',
  },
]

export const works = [
  {
    id: 1,
    company: 'CAST GROUP | BANCO DO BRASIL',
    role: 'Fullstack Web Developer',
    duration: '(Set 2023 - moment)',
    activities:
      'Outsourced collaborator - Development of portals and internal systems for the IT Architecture team. Participation in the development of UX design.',
  },
  {
    id: 2,
    company: 'MARTINS ADVOGADOS ASSOCIADOS',
    role: 'Fullstack Web Developer',
    duration: '(Nov 2022 - May 2023)',
    activities:
      'Development of the system to control processes, clients and lawyers and generation of contracts and drafts requested by the firm. Development with React JS, elaboration of the layout and design of the system, development and integration with the back-end.',
  },
  {
    id: 3,
    company: 'NÚCLEO DE DADOS DA PRÓ-REITORIA DE EXTENSÃO (PROEX)',
    role: 'Universidade Federal do Cariri',
    duration: '(Jun 2022 - Dec 2022)',
    activities:
      'IT support, monitoring and management of data sheets, creation of graphics and information indicators, creation of certificates for courses and events, monitoring and participation in the organization of extension events.',
  },
  {
    id: 4,
    company: 'AR E2S CORRETORA DE SEGUROS LTDA-ME',
    role: 'Analista de Suporte Computacional',
    duration: '(Set 2020 - Aug 2022)',
    activities:
      'IT support, customer service, issuer of Digital Certificates (AGR-Registration Agent), employee training and document analysis. Development of the portfolio and internal web system.',
  },
  {
    id: 5,
    company: 'FREELANCER',
    role: 'Desenvolvedor Web - Analista de TI',
    duration: '(Jan 2022 - moment)',
    activities:
      'Development of web systems and portfolio sites with React, Html, CSS, Javascript, Bootstrap and Styled Components. IT consulting for businesses and companies. Assembly and maintenance of computers, notebooks and networks. Provision of IT services to outsourced companies.',
  },
]
