import React from 'react';
import { Highlight } from '../../../svg';

const hero_contents = {
  shapes: [
    { number: 'one', img: '/assets/img/hero/hero-light-1.webp' },
    { number: 'two', img: '/assets/img/hero/hero-light-2.webp' },
    { number: 'three z-index-1', img: '/assets/img/hero/Spiral.webp' },
    { number: 'four z-index-1', img: '/assets/img/hero/hero-light-2.webp' },
  ],
  title: 'Hi 👋 I am collax, website and user interface',
  highlightText: 'Designer',
  hero_img: '/assets/img/hero/hero-3.webp',
  brands: [
    { img: 'hero-icon-1', title: 'Dribbble',link: 'https://dribbble.com/' },
    { img: 'hero-icon-2', title: 'Behance',link: 'https://www.behance.net/' },
    { img: 'hero-icon-3', title: 'Massage',link: 'http://facebook.com' },
  ]
}

const { brands, hero_img, highlightText, shapes, title } = hero_contents;

const HeroArea = () => {
  return (
    <div className="tp-hero-area-two">
      <div className="tp-hero-bg-circle p-relative">
        {shapes.map((s, i) => (
          <div key={i} className={`tp-hero-light-shape-${s.number}`}>
            <img src={s.img} alt="" />
          </div>
        ))}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="tp-hero-content-box text-center">
                <h3 className="tp-hero-title wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">{title} {' '}
                  <span className="tp-highlight"><Highlight/>
                    <i className="tp-theme-color">{highlightText}</i>
                  </span>
                </h3>
                <div className="tp-hero-img mt-20 mb-80 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s"  >
                  <img src={hero_img} alt="" />
                </div>
                <div className="tp-hero-social-link wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                  {brands.map((b, i) => (
                    <a key={i} className="tp-btn-white-brand" href={b.link} target="_blank" rel="noreferrer">
                      <img className="mr-15" src={`/assets/img/hero/${b.img}.webp`} alt="" />
                      {b.title} <i className="fal fa-long-arrow-right"></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;