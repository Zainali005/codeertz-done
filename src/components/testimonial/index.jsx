import React, { useEffect } from 'react';
import { FooterThree, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import Cta from '../common/cta/cta';
import TestimonialArea from './testimonial-area';


const Testimonials = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Breadcrumb title={'Our Review'} />
      <TestimonialArea/>
      <Cta/>
      <FooterThree />
    </Wrapper>
  );
};

export default Testimonials;