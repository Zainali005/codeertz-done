import React from 'react';

const testimonial_data = [
  {
    brand: '/assets/img/testimonial/testi-brands-1.webp',
    ratings: [1, 2, 3, 4, 5],
    desc: 'One of the best designers that turns the client pain points and requests into magnificent designs. Aware of all the aspect that should be considered to fulfill the requirements in high-quality implementation as an expected end result. Has patience while receiving and confirming the requirements, conducting the wire frames and style guides and also creates great portoflios for their projects.',
    user: '/assets/img/testimonial/testi-4.2.webp',
    name: 'Leslie Alexander',
    title: 'P. Desiger of (Amazon)',
    delay: '.3s'
  },
  {
    brand: '/assets/img/testimonial/testi-brands-2.webp',
    ratings: [1, 2, 3, 4],
    desc: 'Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing... experience with him Wow. What a great experience with this copywriter. Muhammad Noman is a very talented',
    user: '/assets/img/testimonial/testi-4.5.webp',
    name: 'Guy Hawkins',
    title: 'Ux Designer of (Godaddy)',
    delay: '.5s'
  },
  {
    brand: '/assets/img/testimonial/testi-brands-2.webp',
    ratings: [1, 2, 3, 4, 5],
    desc: 'Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing... experience with him Wow. What a great experience with this copywriter. Muhammad Noman is a very talented',
    user: '/assets/img/testimonial/testi-4.1.webp',
    name: 'Darrell Steward',
    title: 'UI Designer of (Amazon)',
    delay: '.7s'
  },
  {
    brand: '/assets/img/testimonial/testi-brands-2.webp',
    ratings: [1, 2, 3, 4, 5],
    desc: 'Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing... experience with him Wow. What a great experience with this copywriter. Muhammad Noman is a very talented',
    user: '/assets/img/testimonial/testi-4.6.webp',
    name: 'Dianne Russell',
    title: 'Founder Of(Rirax)',
    delay: '.9s'
  },
  {
    brand: '/assets/img/testimonial/testi-brands-2.webp',
    ratings: [1, 2, 3, 4],
    desc: 'Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing... experience with him Wow. What a great experience with this copywriter. Muhammad Noman is a very talented',
    user: '/assets/img/testimonial/testi-4.7.webp',
    name: 'Robert Fox',
    title: 'P. Desiger of (Amazon)',
    delay: '1s'
  },
  {
    brand: '/assets/img/testimonial/testi-brands-2.webp',
    ratings: [1, 2, 3, 4, 5],
    desc: 'Wow. What a great experience with this copywriter. Muhammad Noman is a very talented copywriter. yesterday I got his first Email that was amazing... experience with him Wow. What a great experience with this copywriter. Muhammad Noman is a very talented',
    user: '/assets/img/testimonial/testi-4.8.webp',
    name: 'Bessie Cooper',
    title: 'P. Desiger of (Amazon)',
    delay: '1.1s'
  },
]

const TestimonialArea = () => {
  return (
    <>
      <div className="tp-testimonial-area pt-130 pb-130 p-relative">
        <div className="container">
          <div className="row">
            {testimonial_data.map((item, i) => {
              const { brand, delay, desc, name, ratings, title, user } = item;
              return <div key={i} className="col-xl-12 wow tpfadeUp" data-wow-duration="1s"
                data-wow-delay={delay}>
                <div className="tp-testimonial-item-four testimonial-html-space mb-30">
                  <div
                    className="tp-testimonial-item-four__meta d-flex justify-content-between align-items-center mb-60">
                    <div className="tp-testimonial-item-four__logo">
                      <a href="#"><img src={brand} alt="" /></a>
                    </div>
                    <div className="tp-testimonial-item-four__rating">
                      {ratings.map(r => <span key={r}><i className="fas fa-star"></i></span>)}
                    </div>
                  </div>
                  <div className="tp-testi-paragraph pb-40">
                    <p>{desc}</p>
                  </div>
                  <div className="tp-testimonial-item-four__client d-flex align-items-center">
                    <div className="mr-20">
                      <img src={user} alt="" />
                    </div>
                    <div className="tp-testimonial-item-four__position">
                      <h4 className="m-0">{name}</h4>
                      <span>{title}</span>
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialArea;