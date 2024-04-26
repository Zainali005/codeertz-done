import React from 'react';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import TermsContionArea from '../components/Terms-Condition';

const TermsConditions = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Terms & Condition'} />
      <TermsContionArea />
    </Wrapper>
  );
};

export default TermsConditions;