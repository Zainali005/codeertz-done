import React from 'react';
import Brands from '../../common/brands';

const BrandArea = () => {
  return (
    <div className="tp-brand-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tp-brand-title pb-60 d-flex align-items-center">
              <h4 className="tp-brand-build-title">We are Already Build Solution for <i
                className="fal fa-angle-down"></i></h4>
            </div>
          </div>
        </div>
        <div className="tp-brand-sl">
          <div className="swiper-container brand-slider-active">
            <Brands />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;