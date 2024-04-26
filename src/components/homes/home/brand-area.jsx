import React from 'react';
import Brands from '../../common/brands';

const BrandArea = () => {
  return (
    <div className="tp-brand-area pt-135 grey-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tp-brand-section text-center pb-60">
              <h4 className="tp-brand-title">We are Already Build Solution for...</h4>
            </div>
          </div>
        </div>
        <div className="tp-brand-slider-section">
          
          <div className="swiper-container brand-slider-active">
           <Brands/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;