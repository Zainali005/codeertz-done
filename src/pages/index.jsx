import React from 'react';
import HomeDefault from '../components/homes/homeDefault';
import SEO from '../components/seo';
import { Wrapper } from '../layout';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home'} />
      <HomeDefault />
    </Wrapper>
  );
};

export default index;