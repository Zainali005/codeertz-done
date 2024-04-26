import Link from 'next/link';
import React from 'react';

const Cta = () => {
  return (
    <div className="tp-news-letter-area tp-news-letter-bg pt-200 pb-150"
      style={{ backgroundImage: 'url(/assets/img/news/news-bg.webp)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-12 ">
            <div className="tp-news-sub-wrapper text-center">
              <div className="tp-news-letter-section-box">
                <h2 className="tp-title-sm tp-title-sm tp-white-text pb-30">Launch your product with us</h2>
                <p className="text-white pb-35">We had the pleasure of being a partner for companies from markets like Fintech, Health, Government, Security, Big Data & many more.</p>
              </div>
              <div className="tp-news-button">
                <Link href="/contact">
                  <a className="tp-btn-lg-yellow">Become a Partner</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;