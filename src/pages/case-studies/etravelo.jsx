import React from "react";
import { FooterThree, HeaderFour, Wrapper } from "../../layout";
import SEO from "../../components/seo";
import CaseStudiesDetail from "../../components/homes/home-2/case-studies-detail";
import { useRouter } from "next/router";
import { caseStudies } from "../../data";
const Etravelo = () => {
  const router = useRouter();
  console.log("router data", router);
  return (
    <Wrapper>
      <HeaderFour />
      <SEO pageTitle={"etravelo-casestudy"} />
      <CaseStudiesDetail data={caseStudies[0]} />
      <FooterThree />
    </Wrapper>
  );
};

export default Etravelo;
