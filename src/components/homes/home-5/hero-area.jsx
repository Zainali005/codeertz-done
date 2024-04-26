import Link from 'next/link';
import React from 'react';
import { ArrowRight, HighlightTwo } from '../../../svg';

const hero_contents = {
  shapes: [
    'hero-shape-5.1.webp',
    'hero-shape-4.webp',
    'hero-shape-4.webp',
    'hero-shape-5.2.webp',
  ],
  subtitle: <>Offer is going on till friday , <b>$84,99</b><span>/mo</span></>,
  title: 'Business Planing',
  highlight_text: 'Advisors',
  short_text: <>At collax we specialize in designing, building, shipping and scaling <br /> beautiful, usable products with blazing.</>,
  hero_img: '/assets/img/hero/hero-5.1.webp',
  social_links: [
    { num: 1, icon: 'fab fa-facebook-f social-icon-1', title: 'Facebook',link: 'http://facebook.com' },
    { num: 3, icon: 'fab fa-youtube social-icon-3', title: 'Youtube',link: 'https://www.youtube.com/' },
    { num: 2, icon: 'fab fa-twitter social-icon-2', title: 'Twitter',link: 'http://twitter.com' },
    { num: 2, icon: 'fab fa-behance social-icon-2', title: 'Behance',link: 'https://www.behance.net/' },
  ],
  submit_text: 'Free Consultation'
}

const { hero_img, highlight_text, shapes, short_text, subtitle, title, social_links, submit_text } = hero_contents;

const HeroArea = () => {
  return (
    <div className="tp-hero-area tp-hero-border p-relative">
      {shapes.map((s, i) => (
        <div key={i} className={`bp-hero-shape-${i + 1} d-none d-xxl-block`}>
          <img src={`/assets/img/hero/${s}`} alt="" />
        </div>
      ))}
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="tp-hero-section-box-five">
              <div className="tp-hero-section-box-five__subtitle-wrapper d-flex justify-content-between align-items-center mb-40 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
                <div className="tp-hero-section-box-five__subtitle">
                  <h5>{subtitle}</h5>
                </div>
                <div className="tp-hero-section-box-five__subtitle-link">
                  <Link href="/price">
                    <a><ArrowRight /></a>
                  </Link>
                </div>
              </div>
              <div className="tp-hero-section-box-five__title pb-45">
                <h3 className="tp-hero-bs-title wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">
                  {title}
                  <span className="tp-highlight">
                    <svg className="highlight-space" width="266" height="12" viewBox="0 0 266 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 0L266 12H0V0Z" fill="#FFDC60" /></svg>
                    <i>{highlight_text}</i>
                  </span>
                </h3>
                <p className="wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".9s">{short_text}</p>
              </div>
              <div className="tp-hero-section-box-five__input wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                <form onSubmit={e => e.preventDefault()}>
                  <input type="text" placeholder="themepure@gmail.com" />
                  <button className="tp-btn" type="submit">{submit_text}</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 ">
            <div className="tp-hero-right-side-five p-relative pt-100">
              <div className="tp-yellow-circle-five"></div>
              <div className="tp-hero-right-side-five__img wow tpfadeRight"
                data-wow-duration=".9s" data-wow-delay="1.2s">
                <img src={hero_img} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="tp-hero-icon-five">
          <div className="tp-hero-social bp-hero-social tp-hero-social-bg-color">
            {social_links.map((l, i) => (
              <a key={i} className={`social-icon-${l.num} ${l.title === 'Behance' ? 'd-md-none' : ''}`} 
              href={l.link} target="_blank" rel="noreferrer">
                <i className={l.icon}></i><span>{l.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;