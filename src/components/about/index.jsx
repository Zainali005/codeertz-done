import React, { useEffect } from 'react';
import { FooterThree, HeaderFour, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import CtaTwo from '../common/cta/cta-2';
import AboutArea from './about-area';
import FeatureArea from './feature-area';
import ServicesArea from './services-area';
import TeamArea from './team-area';

const About = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title={'About Us'} imgName={"about_us-min.webp"} />
      <AboutArea/>
      <ServicesArea/>
      <FeatureArea/>
      {/* <TeamArea/> */}
      <FooterThree />
    </Wrapper>
  );
};

export default About;