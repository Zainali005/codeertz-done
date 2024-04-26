import Link from 'next/link';
import React from 'react';

const footer_contents = {
  shapes: [
    { num: 'one', img: '/assets/img/creative/creative-hand.webp' },
    { num: 'two', img: '/assets/img/service/service-1.webp' },
  ],
  title: 'Let’s build something together',
  text: 'At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast efficiency',
  btn_text: 'Contact us',
  copy_right_text: <>© {new Date().getFullYear()} Personal Portfolio , All Right Received.</>,
  copy_right_menu: ['Case Studies', 'Pricing Plan'],
  social_links: ['fab fa-linkedin-in', 'fab fa-facebook-f', 'fab fa-instagram', 'fab fa-youtube'],
  social_links: [
    {icon: 'fab fa-linkedin-in',link: 'https://www.linkedin.com/' },
    {icon: 'fab fa-facebook-f',link: 'http://facebook.com' },
    {icon: 'fab fa-instagram',link: 'https://www.instagram.com/' },
    {icon: 'fab fa-youtube',link: 'https://www.youtube.com/' },
  ],
}
const { shapes, btn_text, copy_right_menu, copy_right_text, social_links, text, title } = footer_contents;

const FooterTwo = () => {
  return (
    <footer className="p-relative">
      <div className="tp-footer-area pt-120 p-relative">
        {shapes.map((s, i) => <div key={i} className={`tp-footer-shape-${s.num}`}>
          <img src={s.img} alt="" />
        </div>)}
        <div className="container">
          <div className="row">
            <div className="col-xl-12 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
              <div className="footer-widget-info text-center">
                <h2 className="tp-footer-title pb-15">{title}</h2>
                <p>{text}</p>
                <Link href="/contact">
                  <a className="tp-btn mb-50">{btn_text}</a>
                </Link>
                <p className="right-receved">{copy_right_text}</p>
              </div>
            </div>
          </div>
          <div className="tp-copyright-bottom wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                <div className="tp-copyright-logo-box text-md-center text-center text-lg-start mb-30">
                  <div className="tp-copyright-logo">
                    <Link href="/">
                      <a><img src="/assets/img/logo/logo-blue.webp" alt="" /></a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="tp-cpoyright-menu text-md-start text-center text-lg-center mb-30">
                  {copy_right_menu.map((m, i) => <a key={i} href="#">{m}</a>)}
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="tp-copyright-social tp-copyright-social-two text-center text-lg-end mb-30">
                  {social_links.map((s, i) => (
                    <a key={i} href={s.link} target="_blank" rel="noreferrer"><i className={s.icon}></i></a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;