import React from 'react';

const brand_contents = {
  title: 'We’ve built solutions for',
  brands: [
    '/assets/img/brand/brand-7.webp',
    '/assets/img/brand/brand-8.webp',
    '/assets/img/brand/brand-9.webp',
    '/assets/img/brand/brand-10.webp',
    '/assets/img/brand/brand-11.webp',
    '/assets/img/brand/brand-12.webp',
    '/assets/img/brand/brand-13.webp',
    '/assets/img/brand/brand-14.webp',
  ]
}

const { brands, title } = brand_contents;

const BrandArea = () => {
  return (
    <div className="tp-brands-area theme-bg pt-125 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-brands-title-two text-center mb-80">
              <h3>{title}<span>...</span></h3>
            </div>
          </div>
        </div>
        <div className="row">
          {brands.map((img, i) => (
            <div key={i} className="col-xl-3 col-lg-3 col-md-4 col-6">
              <div className="tp-brands-item text-start text-md-center mb-60">
                <img src={img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandArea;