import Link from 'next/link';
import React from 'react';

const SingleServiceTwo = ({ service, border }) => {
  return (
    <div className="col-lg-6 col-md-12 col-12">
      <div className="tp-sv-box wow tpfadeUp" data-wow-duration={service.duration}
        data-wow-delay={service.delay}>
        <div className={`tp-service-item ${border ? border : ''} d-flex mb-30`}>
          <div className="tp-sv-img">
            <img src={service.img} alt="" />
          </div>
          <div className="tp-sv-content pl-60">
            <h3 className=" tp-sv-title mb-35">
              <Link href={`/service-details/${service.id}`}>
                <a>{service.title}</a>
              </Link>
            </h3>
            <p className="mb-30">{service.text_1}</p>
            <p>{service.text_2}</p>
            <div className="tp-sv-link mt-35">
              <Link href={`/service-details/${service.id}`}>
                <a>
                  <i className="far fa-arrow-right"></i> Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceTwo;