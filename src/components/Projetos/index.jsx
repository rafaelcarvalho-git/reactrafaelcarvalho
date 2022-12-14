import * as S from './styles'
import '../../assets/swiper/swiper-bundle.min.css'
import { Line, TitleSection, Title } from '../../global.js'
import { BsLink45Deg, BsCodeSlash } from "react-icons/bs"
import { projetos, devicons } from '../../assets/data.js'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper"
import Fade from 'react-reveal/Fade'

function Projetos() {
    return (
        <S.Projects className="projetos">
            <Fade>
                <div className="container">
                    <TitleSection>
                        <Title>PROJETOS</Title>
                        <Line />
                    </TitleSection>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper mb-4"
                    >
                        {projetos.map((projeto) => {
                            return (
                                <SwiperSlide key={projeto.id} className="px-5">
                                    <div class="row align-items-center mb-5 py-3 text-center text-lg-start">
                                        <div class="col-12 col-lg-6 d-flex mb-4 mb-lg-0">
                                            <S.ProjectImage src={projeto.image} alt="project" />
                                        </div>
                                        <div class="col-12 col-lg-6 ps-lg-1 pe-lg-5">
                                            <div className="d-flex flex-column flex-lg-row align-items-center mb-4">
                                                <h5 className="mb-4 mb-lg-0">{projeto.title}</h5>
                                                <S.ProjectIcons className="ms-lg-auto">
                                                    {devicons.map((icon) => {
                                                        if (icon.id === projeto.id) { return <img src={icon.icon} width="28px" className="projeto-icon ms-2" alt="project icon" /> }
                                                    }
                                                    )}
                                                </S.ProjectIcons>
                                            </div>
                                            <p className="pe-0 pe-lg-5 mb-4">{projeto.desc}</p>
                                            <div className="btn-group btn-group-md mt-4" role="group" aria-label="Basic example">
                                                <a href={projeto.live} target="_blank" rel="noreferrer noopener" className="btn-pattern info-border px-3"><BsLink45Deg className="me-2" />Live</a>
                                                <a href={projeto.code} target="_blank" rel="noreferrer noopener" className="btn-pattern info px-3">Code<BsCodeSlash className="ms-2" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                        )}
                    </Swiper>
                </div>
            </Fade>
        </S.Projects>
    );
}

export default Projetos;