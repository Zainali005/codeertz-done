import React from "react";
import Image from "next/image";
import {
  FeatureOne,
  FeatureThree,
  FeatureTwo,
  Featurefour,
  Featurefive,
  Featuresix,
} from "../../../svg";

const feature_contents = {
  feature_img: "/assets/img/feature/fea-1.webp",
  subtitle: "Why Choose us",
  title: `Experienced and Trusted: Your Ideal Partner`,
  highlight_text: "development",
  feature_lists: [
    {
      id: 1,
      icon: <FeatureOne />,
      title: "Unparalleled Quality",
      subtitle: (
        <>
          Experience excellence with our design and development solutions. Our team consistently delivers top-tier work that sets new standards.
        </>
      ),
    },
    {
      id: 2,
      icon: <FeatureTwo />,
      title: "Unified Team Approach",
      subtitle: (
        <>
          Simplify project management with our cohesive in-house team. From concept to launch, we ensure a seamless journey towards success.
        </>
      ),
    },
    {
      id: 3,
      icon: <Featurefour />,
      title: "Hassle-Free Talent Acquisition",
      subtitle: (
        <>
          Say goodbye to recruitment headaches with Codeertz. Sign up and let us handle all your talent requirements for guaranteed success.
        </>
      ),
    },
    {
      id: 4,
      icon: <Featurefive />,
      title: "Reliable Delivery",
      subtitle: (
        <>
          Experience precision with Codeertz' delivery process. We never compromise on quality and always fulfill our promises. Are you ready to witness results?
        </>
      ),
    },
    {
      id: 5,
      icon: <FeatureThree />,
      title: "Transparent Pricing",
      subtitle: (
        <>
          Stay in control of your budget with our transparent pricing models. No hidden fees or surprises – pause your subscription anytime.
        </>
      ),
    },
    {
      id: 6,
      icon: <Featuresix />,
      title: "Strict Confidentiality",
      subtitle: (
        <>
          Your ideas are safe with us. We prioritize confidentiality and ensure strict adherence to legal agreements. Trust us with your vision.
        </>
      ),
    },
  ],

};

const { feature_img, feature_lists, highlight_text, subtitle, title } =
  feature_contents;

const FeatureArea = () => {
  return (
    <div
      className="tp-feature-arae pt-100 pb-100 p-relative border-b"
      id="whychoose"
    >
      <div className="ce-chose-shape d-none d-lg-block">
        <img src="/assets/img/hero/hero-shape-4.webp" alt="" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-12  wow tpfadeRight"
            data-wow-duration=".5s"
            data-wow-delay=".7s"
          >
            <div className="tp-fea-right-side">
              <div className="tp-fea-section-box">
                <h5 className="tp-subtitle pb-10 text-center">{subtitle}</h5>
                <h2 className="max-w-title tp-title-sm pb-65 text-center">
                  {title}
                  <span className="tp-section-highlight">
                    {highlight_text}
                    <svg
                      width="240"
                      height="11"
                      viewBox="0 0 240 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0L240 11H0V0Z"
                        fill="var(--tp-theme-primary)"
                      />
                    </svg>
                  </span>{" "}
                  partner
                </h2>
              </div>
              <div className="fea-wrapper-main fea-wrapper-grid">
                {feature_lists.map((list, i) => {
                  const { icon, id, subtitle, title } = list;
                  return (
                    <div key={id} className="tp-feature-list d-flex">
                      <div className={`tp-feature-list__icon-img mr-25`}>
                        {icon}
                      </div>
                      <div className="tp-feature-list__content">
                        <h4>{title}</h4>
                        <p>{subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
};

export default FeatureArea;
