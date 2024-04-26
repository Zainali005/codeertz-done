import React, { useEffect } from 'react';
import { FooterThree, HeaderFour, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import Cta from '../common/cta/cta';
import FaqArea from './faq-area';


const Faq = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title={'Ask Question'} />
      <FaqArea />
      <Cta/>
      <FooterThree />
    </Wrapper>
  );
};

export default Faq;