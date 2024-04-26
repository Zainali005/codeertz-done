import Link from 'next/link';
import React from 'react';

const PlainContentDark = () => {
  return (
    <section className='container-fluid black-bg'>
        <div className="container pt-50">
    <div className="row">
      <div className="col-xl-12 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
        <div className="footer-widget-info text-center">
          <h2 className="tp-footer-title pb-15 text-white">Let’s build something together</h2>
          <p className='text-white'>At Collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast efficiency</p>
          <Link href="/contact">
            <a className="tp-btn mb-50">Contact us</a>
          </Link>
        </div>
      </div>
    </div>
  </div>
    </section>
    
  );
};

export default PlainContentDark;