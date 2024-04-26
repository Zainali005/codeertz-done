import React from 'react';
import Brands from '../../common/brands';

const BrandArea = () => {
  return (
    <div className="tp-brand-area pt-50 pb-50 black-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <div className="tp-brand-title-four text-center pb-60">
              <h4 className="tp-brand-title">Over <b>35k+</b> Software business growing with Codeertz</h4>
            </div> */}
          </div>
        </div>
        <div className="tp-brand-slider-section">
          <div className="swiper-container brand-slider-active">
            <Brands />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;