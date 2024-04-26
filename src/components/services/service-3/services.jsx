import React from 'react';
import { services_data } from '../../../data';
import SingleServiceThree from '../../common/single-service-3';

const services_items = services_data.filter(item => item.service_p_3);

const Services = () => {
  return (
    <>
      <div className="tp-service-area-two p-relative black-bg pt-125 pb-145 z-index-1">
         <div className="container">
            <div className="row gx-12">
              {services_items.map((item,i) => (
                <SingleServiceThree key={i} service={item} />
              ))}
            </div>
         </div>
      </div> 
    </>
  );
};

export default Services;