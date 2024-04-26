import React, { useEffect } from 'react';
import { FooterThree, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import Cta from '../common/cta/cta';
import JobArea from './job-area';


const Job = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  return (
    <Wrapper>
      <Breadcrumb title={'Collax Job List'} />
      <JobArea/>
      <Cta/>
      <FooterThree />
    </Wrapper>
  );
};

export default Job;