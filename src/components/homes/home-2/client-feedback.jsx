import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const testimonial_data = [
  {
    id: 1,
    user: '/assets/img/testimonial/testi-7.webp',
    name: 'Alextina Diterson',
    title: 'CEO of (Orix)',
    ratings: [1, 2, 3, 4, 5],
    desc: "Absolutely amazing. we can't believe how incredible this turned out. Yetta Thomas is a true professional. he is such a honest, decent and reliable and satisfied"
  },
  {
    id: 2,
    user: '/assets/img/testimonial/testi-6.webp',
    name: 'Darrell Steward',
    title: 'Founder of (Rirax)',
    ratings: [1, 2, 3, 4],
    desc: "Absolutely amazing. we can't believe how incredible this turned out. Yetta Thomas is a true professional. he is such a honest, decent and reliable and satisfied"
  },
  {
    id: 3,
    user: '/assets/img/testimonial/testi-5.webp',
    name: 'Albert Flores',
    title: 'Founder of (Rirax)',
    ratings: [1, 2, 3, 4, 5],
    desc: "Absolutely amazing. we can't believe how incredible this turned out. Yetta Thomas is a true professional. he is such a honest, decent and reliable and satisfied"
  },
]

const ClientFeedback = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  return (
    <>
      <div className="testimonial-area grey-bg pt-125 pb-120 fix p-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className=" col-xl-8 col-lg-8 col-md-10 col-12 ">
              <div className="tp-testimonial-section-box-two text-center pb-20">
                <h5 className="tp-subtitle">Testimonial</h5>
                <h2 className="tp-title">Client feedback</h2>
              </div>
              <div className="tp-testimonial-slider-two mb-50">
                <Swiper
                  loop={sliderLoop}
                  slidesPerView={1}
                  modules={[Pagination]}
                  pagination={{
                    el: ".testimonial-slider-dots",
                    clickable: true,
                  }}
                  className="swiper-container testimonial-slider-two"
                >
                  {testimonial_data.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div className="tp-testimonial-item-two text-center">
                        <div className="tp-testimonial-info">
                          <img src={item.user} alt="" />
                          <h4>{item.name}</h4>
                          <span>{item.title}
                            {item.ratings.map((r, i) => <i key={i} 
                            className={`fas fa-star ${r === 1?'fa-stars-1':''}`}></i>)}
                          </span>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="testimonial-slider-dots text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientFeedback;