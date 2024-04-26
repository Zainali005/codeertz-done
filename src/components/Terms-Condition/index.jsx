import React, { useEffect } from 'react';
import { FooterThree, HeaderFour, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import TermsCondtionContent from './TermsConditionContent';

const TermsContionArea = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title={'Terms & Conditions'} imgName={"terms_and_conditions.webp"} />
      <TermsCondtionContent />
      <FooterThree />
    </Wrapper>
  );
};

export default TermsContionArea;