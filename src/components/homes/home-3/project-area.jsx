import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { portfolio_data } from '../../../data';
import Link from 'next/link';

const project_items = portfolio_data.filter(p => p.home_3);

const project_contents = {
  subtitle: 'Projects',
  title: 'Our complete',
  highlight_text: 'project'
}
const { highlight_text, subtitle, title } = project_contents;

const ProjectArea = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), [])
  return (
    <div className="tp-project-area pt-125 pb-120 grey-bg fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-project-section-box text-center pb-25">
              <h5 className="tp-subtitle">{subtitle}</h5>
              <h2 className="tp-title">{title}
                <span className="tp-section-highlight">
                  {highlight_text}
                  <svg width="197" height="11" viewBox="0 0 197 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="wow" d="M0 0L197 11H0V0Z" fill="#FFDC60" />
                  </svg>
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="tp-project-slider-section-three">
          <Swiper
            loop={sliderLoop}
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            className="swiper-container project-slider-three-active"
            pagination={{
              el: ".project-slider-dots",
              clickable: true,
            }}
            breakpoints={{
              '1200': {
                slidesPerView: 2,
              },
              '992': {
                slidesPerView: 2,
              },
              '768': {
                slidesPerView: 1,
              },
              '576': {
                slidesPerView: 1,
              },
              '0': {
                slidesPerView: 1,
              },
            }}
          >
            {project_items.map((item) => {
              const { id, category, img, title } = item;
              return <SwiperSlide key={id}>
                <div className="tp-project-item-three text-center p-relative">
                  <div className="tp-project-item-three__img">
                    <img src={img} alt="" />
                  </div>
                  <div className="tp-project-item-three__bg">
                    <div className="tp-project-item-three__bg-info">
                      <h3 className="tp-project-title">
                        <Link href={`/portfolio-details/${id}`}>
                          <a>{title}</a>
                        </Link>
                      </h3>
                      <h5 className="tp-project-subtitle">{category}</h5>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            })}
          </Swiper>
          <div className="project-slider-dots text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectArea;