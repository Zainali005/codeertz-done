import React, { useEffect } from 'react';
import { FooterThree, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import CtaTwo from '../../common/cta/cta-2';
import CaseArea from '../../common/recent-case-studies';
import TestimonialArea from '../../homes/home-4/testimonial-area';
import Services from './services';


const ServiceThree = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Breadcrumb title={'Service 03'} />
      <Services/>
      <CaseArea padd={'pt-130'} />
      {/* <TestimonialArea style_2={true}/> */}
      {/* <CtaTwo/> */}
      <FooterThree />
    </Wrapper>
  );
};

export default ServiceThree;