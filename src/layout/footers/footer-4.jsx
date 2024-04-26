import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import SocialLinks from '../social-links';
import CopyrightArea from './component/copyright-area';

const footer_contents = {
  shapes: ['hero-shape-5.1.webp', 'testimonial-shape-5.4.webp'],
  logo: '/assets/img/logo/logo-blue.webp',
  widget_desc: 'A new way to make the payments easy, reliable and 100% secure. claritatem itamconse quat. Exerci tationulla',
  footer_widgets: [
    {
      w_class: 'd-flex justify-content-lg-center',
      title: 'Useful Links',
      widget_lists: ['Contact us', 'How it Works', 'Create', 'Explore', 'Terms & Services']
    },
    {
      padd: 'pl-20',
      title: 'Community',
      widget_lists: ['Help Center', 'Partners', 'Suggestions', 'Blog', 'Newsletters']
    },
  ],
  subscribe_title: 'Subscribe Newslatter',
  subscribe_text: 'Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo',
  copy_right_text: <>© Copyright ©{new Date().getFullYear()} Collax. All Rights Reserved Copyright</>,
  conditions: ['Terms and conditions', 'Privacy policy', 'FAQs']
}
const { conditions, copy_right_text, footer_widgets, logo, widget_desc, subscribe_text, subscribe_title, shapes }
  = footer_contents;

const FooterFour = () => {
  return (
    <footer>
      <div className="tp-footer-area pt-130 pb-30 p-relative">
        {shapes.map((s, i) => (
          <div key={i} className={`bp-foooter-shape-${i + 1} d-none d-lg-block`}>
            <img src={`/assets/img/footer/${s}`} alt="" />
          </div>
        ))}
        <div className="container">
          <div className="row wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tp-footer-widget">
                <div className="tp-footer-widget__logo mb-30">
                  <Link href="/">
                    <a><Image width={250} height={45} src={logo} alt="" /></a>
                  </Link>
                </div>
                <div className="tp-footer-widget__text mb-30">
                  <p>{widget_desc}</p>
                </div>
                <div className="tp-footer-widget__social-link tp-footer-widget__social-link-2 ">
                  <SocialLinks />
                </div>
              </div>
            </div>
            {footer_widgets.map((w, i) => {
              const { title, widget_lists, w_class, padd } = w;
              return <div key={i} className={`col-xl-3 col-lg-2 col-md-6 ${w_class ? w_class : ''}`}>
                <div className={`tp-footer-widget ${padd ? padd : ''}`}>
                  <div className="tp-footer-widget__title pb-15">
                    <h3 className="footer-title text-black">{title}</h3>
                  </div>
                  <div className="tp-footer-widget__list">
                    <ul>
                      {widget_lists.map((l, i) => <li key={i}><a href="#">{l}</a></li>)}
                    </ul>
                  </div>
                </div>
              </div>
            })}
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tp-footer-widget">
                <div className="tp-footer-widget__title pb-15">
                  <h3 className="footer-title text-black">{subscribe_title}</h3>
                </div>
                <div className="tp-footer-widget__text mb-55">
                  <p>{subscribe_text}</p>
                </div>
                <div className="tp-footer-widget__input tp-input-white">
                  <form onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder="Enter Mail" />
                    <button type="submit"><i className="fas fa-paper-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CopyrightArea start */}
        <CopyrightArea copy_right_text={copy_right_text} conditions={conditions} color={'tp-copyright-color'} />
        {/* CopyrightArea end */}
      </div>
    </footer>
  );
};

export default FooterFour;