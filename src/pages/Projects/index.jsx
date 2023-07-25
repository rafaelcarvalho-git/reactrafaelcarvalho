import * as S from './styles'
import { Container } from 'global.js'
import { BsLink45Deg, BsCodeSlash } from "react-icons/bs"
import { projects, devicons } from 'assets/data.js'
import Fade from 'react-reveal/Fade'
import PageTitle from 'components/PageTitle'
import { Col, Row, Tooltip } from 'antd'
import HoverInfo from 'components/HoverInfo'

const Projects = () => {
    return (
        <S.Projects>
            <Fade>
                <Container>
                    <PageTitle title="Dev Projects" />

                    <Row gutter={24} justify={'center'} align={'middle'}>
                        {projects.map((project) => {
                            return (
                                <Col xs={24} sm={24} md={12} lg={8} xl={6} key={project.title} style={{ maxWidth: '420px', marginBottom: '42px' }}>
                                    <Tooltip title={project.desc} trigger={['hover', 'click']}>
                                        <S.ProjectImage src={project.image} alt="project" />
                                    </Tooltip>
                                    <S.ProjectInfo>
                                        <h5>{project.title}</h5>
                                        <S.ProjectIcons>
                                            {devicons.map(({ id, icon }) => {
                                                if (id === project.id) { return <img src={icon} width="24px" alt={project.title} loading="lazy" /> }
                                            }
                                            )}
                                        </S.ProjectIcons>
                                    </S.ProjectInfo>
                                    <S.ProjectButtons>
                                        <S.BtnProject type='primary' size='large' href={project.live} target="_blank" rel="noreferrer noopener"><BsLink45Deg /> Live</S.BtnProject>
                                        <S.BtnProject type='primary' ghost={true} size='large' href={project.code} target="_blank" rel="noreferrer noopener"><BsCodeSlash /> Code</S.BtnProject>
                                    </S.ProjectButtons>
                                </Col>
                            )
                        }
                        )}
                    </Row>
                    <HoverInfo hoverText={'Hover or click the projects to see the description'} />
                </Container>
            </Fade>
        </S.Projects >
    );
}

export default Projects
