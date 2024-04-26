import React, { useEffect } from 'react';
import { FooterThree, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import PortfolioArea from './portfolio-area';

const Portfolio = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
     <Breadcrumb title={'Portfolio Full Width'} />
     <PortfolioArea/>
     <FooterThree/>
    </Wrapper>
  );
};

export default Portfolio;