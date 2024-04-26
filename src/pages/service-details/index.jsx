import React from 'react';
import SEO from '../../components/seo';
import { services_data } from '../../data';
import { Wrapper } from '../../layout';
import ServiceDetailsMain from '../../components/service-details';

const service_item = services_data[1]

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Service Details'} />
      <ServiceDetailsMain service={service_item} />
    </Wrapper>
  );
};

export default index;