import Link from 'next/link';
import React from 'react';

const SingleServiceThree = ({ service }) => {
  const { delay, duration, id, img, text_1, title, color } = service || {};
  return (
    <div className="col-xl-4  col-lg-4 col-md-6 wow tpfadeUp"
      data-wow-duration={duration} data-wow-delay={delay}>
      <div className={`tp-sv-item-two ${color} mb-30`}>
        <div className="tp-sv-img mb-40">
          <img src={img} alt="" />
        </div>
        <div className="tp-sv-content-tow">
          <h3 className="tp-sv-product-design">{title}</h3>
          <p>{text_1}</p>
        </div>
        <div className="tp-sv-icon-two">
          <Link href={`/service-details/${id}`}>
            <a><i className="fas fa-long-arrow-up"></i></a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceThree;