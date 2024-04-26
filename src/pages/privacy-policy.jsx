import React from 'react';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import PrivacyPolicyArea from '../components/Privacy-Policy';

const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Privacy Policy'} />
      <PrivacyPolicyArea />
    </Wrapper>
  );
};

export default PrivacyPolicy;