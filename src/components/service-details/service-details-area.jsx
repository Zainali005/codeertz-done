import React from 'react';

const ServiceDetailsArea = () => {
  return (
    <>
      <div className="service-details-area">
        <div className="container">
          <div className="row service-pt-pb">
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details">
                <h3 className="tp-title-sm service-details-space">Find the best solution for every stage of your
                  business development</h3>
                <a href="#">Schedule a free expert session <i className="fal fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p className="pb-15">A dedicated product design team can help you achieve your business goals. Whether
                  you need to craft an idea for a completely new product or elevate the quality of an existing
                  solution, we’ll help you to create a product that is laser targeted to your users’ needs and
                  delivers business results.</p>
                <p className="pb-10">Design services range from research and product review to ideation, UX design, and
                  user testing.</p>
                <p>A dedicated product design team can help you achieve your business goals. Whether you need to
                  craft an idea for a completely new product or elevate the quality of an existing solution, we’ll
                  help you to create a product that is laser targeted to your users’ needs and delivers business
                  results</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="sd-big-img">
                <img src="/assets/img/service/service-icon-10.1.webp" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details">
                <h3 className="tp-title-sm service-details-space">Design process based on best practices and
                  methodologies that deliver</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p className="pb-15">A dedicated product design team can help you achieve your business goals. Whether
                  you need to craft an idea for a completely new product or elevate the quality of an existing
                  solution, we’ll help you to create a product that is laser targeted to your users’ needs and
                  delivers business results.</p>
                <p>Design services range from research and product review to ideation, UX design, and user testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;