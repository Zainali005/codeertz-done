import React, { useEffect } from 'react';
import { FooterThree, HeaderFour, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import PrivacyPolicyContent from './PrivacyPolicyContent';

const PrivacyPolicyArea = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title={'Privacy Policy'} imgName={"privacy.svg"} />
      <PrivacyPolicyContent />
      <FooterThree />
    </Wrapper>
  );
};

export default PrivacyPolicyArea;