import React from "react";
import { FooterThree, HeaderFour, Wrapper } from "../../layout";
import SEO from "../../components/seo";
import CaseStudiesDetail from "../../components/homes/home-2/case-studies-detail";
import { caseStudies } from "../../data";

const index = () => {
  return (
    <Wrapper>
      <HeaderFour />
      <SEO pageTitle={"etravelo-casestudy"} />
      <CaseStudiesDetail data={caseStudies[1]} />
      <FooterThree />
    </Wrapper>
  );
};

export default index;
