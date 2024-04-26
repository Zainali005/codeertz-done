import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const testimonial_contents = {
  subtitle: 'Testimonial',
  title: 'Customer',
  highlight_text: 'feedback',
  testimonial_data: [
    {
      id: 1,
      ratings: [1, 2, 3, 4, 5],
      desc: 'Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing...',
      img: '/assets/img/testimonial/testi-slide-1.webp',
      name: 'Floyd Miles',
      title: 'CEO of (Amazon)',
      brand_img: '/assets/img/testimonial/testi-brands.webp',
    },
    {
      id: 2,
      ratings: [1, 2, 3, 4, 5],
      desc: 'Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing...',
      img: '/assets/img/testimonial/testi-slide-1.webp',
      name: 'Jerome Bell',
      title: 'Web Developer',
      brand_img: '/assets/img/testimonial/testi-brands-2.webp',
    },
    {
      id: 3,
      ratings: [1, 2, 3, 4, 5],
      desc: 'Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing...',
      img: '/assets/img/testimonial/testi-slide-1.webp',
      name: 'Jerome Bell',
      title: 'Web Developer',
      brand_img: '/assets/img/testimonial/testi-brands-2.webp',
    },
    {
      id: 4,
      ratings: [1, 2, 3, 4, 5],
      desc: 'Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing...',
      img: '/assets/img/testimonial/testi-slide-1.webp',
      name: 'Jerome Bell',
      title: 'Web Developer',
      brand_img: '/assets/img/testimonial/testi-brands-2.webp',
    },
  ]
}

const { highlight_text, subtitle, testimonial_data, title } = testimonial_contents;

const TestimonialArea = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), [])
  return (
    <div className="tp-testimonial-area grey-bg pt-125 pb-120 fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-testimonial-title-box text-center pb-25">
              <h5 className="tp-subtitle">{subtitle}</h5>
              <h2 className="tp-title">{title}
                <span className="tp-section-highlight">
                  {highlight_text}
                  <svg width="253" height="11" viewBox="0 0 253 11" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0L253 11H0V0Z" fill="#FFDC60" />
                  </svg>
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="tp-testimonial-slider-section-four">
          <Swiper
            loop={sliderLoop}
            slidesPerView={3}
            spaceBetween={70}
            modules={[Pagination]}
            centeredSlides={true}
            centeredSlidesBounds={true}
            className="swiper-container testi-slider-active-four"
            pagination={{
              el: ".testimonial-slider-dots-four",
              clickable: true,
            }}
            breakpoints={{
              '1200': {
                slidesPerView: 3,
              },
              '992': {
                slidesPerView: 3,
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
            {testimonial_data.map((item) => {
              const { brand_img, desc, id, img, name, ratings, title } = item;
              return <SwiperSlide key={id} className="testi-slider-opacity">
                  <div className="tp-testimonial-box">
                    <div className="tp-testimonial-box__rating">
                      {ratings.map((r) => <span key={r}><i className="fas fa-star"></i></span>)}
                      <p>{desc}</p>
                    </div>
                    <div className="tp-testimonial-box__info d-flex justify-content-between align-items-center">
                      <div className="tp-testimonial-box__testi-slide-img d-flex align-items-center">
                        <img className="mr-25" src={img} alt="" />
                        <div className="tp-testimonial-box__testi-title">
                          <span className="testi-heading">{name}</span>
                          <span>{title}</span>
                        </div>
                      </div>
                      <div className="tp-testimonial-box__testi-brand d-none d-md-block">
                        <img src={brand_img} alt="" />
                      </div>
                    </div>
                  </div>
              </SwiperSlide>
            })}
          </Swiper>

        </div>
        <div className="testimonial-slider-dots-four text-center mt-50"></div>
      </div>
    </div>
  );
};

export default TestimonialArea;