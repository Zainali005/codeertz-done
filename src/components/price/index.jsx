import React, { useEffect } from 'react';
import { FooterThree, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import PriceArea from './price-area';


const Price = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Breadcrumb title={'Pricing Plan'} />
      <PriceArea/>
      <FooterThree />
    </Wrapper>
  );
};

export default Price;