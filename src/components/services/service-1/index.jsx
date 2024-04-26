import React, { useEffect } from 'react';
import { FooterThree, HeaderFour, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import CtaTwo from '../../common/cta/cta-2';
import CaseArea from '../../common/recent-case-studies';
import ServiceArea from './service-area';
import Testimonial from '../../../components/homes/home/testimonial';

const Service = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderFour/>
      <Breadcrumb title={'Services'} imgName={"ab-1.webp"} />
      <ServiceArea />
      <CaseArea/>
      {/* <Testimonial /> */}
      {/* <CtaTwo/> */}
      <FooterThree />
    </Wrapper>
  );
};

export default Service;