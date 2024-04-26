import Link from "next/link";
import React from "react";
import { caseStudies } from "../../../data";

const CaseStudies = () => {
  return (
    <div id="caseStudies" className="tp-project-area pt-80 pb-80 p-relative">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="project-section-box-two text-center pb-20">
              <h5 className="tp-subtitle">Complete Project</h5>
              <h2 className="tp-title">Case Studies</h2>
            </div>
          </div>

          {caseStudies?.map((casestudy, index) => {
            return (
              <Link
              key={index}
                href={
                  index === 0
                    ? "/case-studies/etravelo"
                    : "/case-studies/serversmash"
                }
              >
                <div className="col-md-6">
                  <div className="caseStudyCard">
                    <img
                      className="casestudy-cover"
                      src={casestudy.caseStudyCover}
                      alt=""
                    />
                    <div className="caseStudyCard-caption">
                      <span>{casestudy.type}</span>
                      <h2>{casestudy.name}</h2>
                      <p>{casestudy.introduction}</p>
                      <div className="caseStudyCard-caption-foot">
                        <small>{casestudy.date}</small>
                        <div className="caseStudyCard-posted">
                          <img src={casestudy.authorImage} alt="" />
                          <h5>
                            {casestudy.author}{" "}
                            <small>{casestudy.authorDesignation}</small>{" "}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
