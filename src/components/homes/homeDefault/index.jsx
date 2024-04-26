import React from "react";
import { Provider } from "react-redux";
import { FooterThree, HeaderFour, Wrapper } from "../../../layout";
import ProjectArea from "../home-2/project-area";
import BrandArea from "../home-4/brand-area";
import FeatureArea from "../home-4/feature-area";
import FeatureArea2 from "../home-5/feature-area";
import HeroArea from "../home-4/hero-area";
import ServicesArea from "../home-4/services-area";
import Testimonial from "../home/testimonial";
import BlogArea from "../home-3/blog-area";
import PriceArea from "../../price/price-area";
import FaqArea from "../../faq/faq-area";
import CallToAction from "../../contact/callToAction";
import CaseStudies from "../home-2/case-studies";
import CaseStudiesDetail from "../home-2/case-studies-detail";

export default function HomeDefault() {
  return (
    <Wrapper>
      <HeaderFour />
      <HeroArea />
      <BrandArea />
      <FeatureArea />
      {/* <FeatureArea2 /> */}
      <ServicesArea />
      <PriceArea />
      <div className="container mt-20">
        <CallToAction />
        <div className="row">
        <div className="quote-section">
    <p>Success is not final, failure is not fatal: It is the courage to continue that counts.</p>
    <h4>- Winston Churchill</h4>
</div>

        </div>
      </div>
      <Testimonial />

      <CaseStudies />
      {/* <CaseStudiesDetail /> */}

      <FaqArea />
      {/* <BlogArea /> */}
      <FooterThree />
    </Wrapper>
  );
}
