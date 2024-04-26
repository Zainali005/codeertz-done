import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const testimonial_contents = {
  shapes: ['testimonial-shape-5.3.webp', 'testimonial-shape-5.4.webp'],
  img: '/assets/img/testimonial/testi-5.1.webp',
  testi_items: [
    {
      ratings: [1, 2, 3, 4, 5],
      desc: 'Wow. What a great experience with this copywriter. collax is a very talented digital agnecy. yesterday. I got his first Email that was amazing... talent and wonder full design skills',
      name: 'Floyd Miles',
      title: 'Product designer (Amazon)'
    },
    {
      ratings: [1, 2, 3, 4],
      desc: 'Wow. What a great experience with this copywriter. collax is a very talented digital agnecy. yesterday. I got his first Email that was amazing... talent and wonder full design skills',
      name: 'Dianne Russell',
      title: 'Content Creator (Amazon)'
    },
    {
      ratings: [1, 2, 3, 4, 5],
      desc: 'Wow. What a great experience with this copywriter. collax is a very talented digital agnecy. yesterday. I got his first Email that was amazing... talent and wonder full design skills',
      name: 'Jerome Bell',
      title: 'Web Developer (Amazon)'
    },
  ]
}

const { img, shapes, testi_items } = testimonial_contents;

const ClientFeedback = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), [])
  return (
    <div className="tp-testimonial-area pt-110 pb-130 fix p-relative">
      {shapes.map((s, i) => (
        <div key={i} className={`bp-testi-shape-${i + 1} d-none d-lg-block`}>
          <img src={`/assets/img/testimonial/${s}`} alt="" />
        </div>
      ))}
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-12">
            <div className="tp-testimonial-thumb text-start">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-12">
            <div className="testimonial-pd-slider-section pl-35">
              <Swiper
                loop={sliderLoop}
                slidesPerView={1}
                modules={[Pagination]}
                autoplay={true}
                className="swiper-container testi-slider-pd-active p-relative"
                pagination={{
                  el: ".project-slider-dots",
                  clickable: true,
                }}
              >
                {testi_items.map((item,i) => {
                  const {desc,name,ratings,title} = item;
                  return <SwiperSlide key={i} className="white-bg">
                    <div className="tptesttimonial">
                      <div className="tptestimonial__rating-5 mt-80">
                        {ratings.map((r) => <span key={r}><i className="fas fa-star"></i></span>)}
                        <p>{desc}</p>
                      </div>
                      <div className="tptestimonial__meta-5">
                        <h4 className="tp-pd-testi-title">{name}</h4>
                        <span>{title}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                })}
                <div className="project-slider-dots project-blue-dots text-start text-md-end z-index-1"></div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;