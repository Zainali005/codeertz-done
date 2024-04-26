import React, { useEffect } from 'react';
import { FooterThree, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import CtaTwo from '../../common/cta/cta-2';
import CaseArea from '../../common/recent-case-studies';
import TestimonialArea from '../../homes/home-4/testimonial-area';
import ServicesItems from './services-items';


const ServiceTwo = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Breadcrumb title={'Service 02'} />
      <ServicesItems/>
      <CaseArea/>
      <TestimonialArea style_2={true}/>
      {/* <CtaTwo/> */}
      <FooterThree />
    </Wrapper>
  );
};

export default ServiceTwo;