import React, { useEffect } from 'react';
import { FooterThree, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import AccordionArea from './accordion-area';
import ServiceDetailsArea from './service-details-area';


const ServiceDetails = ({service}) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Breadcrumb title={service?.title ? service?.title : 'Service Details'} />
      <ServiceDetailsArea/>
      <AccordionArea/>
      <FooterThree />
    </Wrapper>
  );
};

export default ServiceDetails;