import Link from 'next/link';
import Image from "next/image";
import React from 'react';
import { portfolio_data } from '../../data';
const case_studies = portfolio_data.filter(item => item.service_p);

const CaseArea = ({ padd }) => {
  return (
    <>
      <div className={`sv-case-area ${padd ? padd : ''} pb-130`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="project-section-box-two text-center pb-60">
                <h2 className="tp-title-sm">Our recent completed case studies</h2>
              </div>
            </div>
          </div>
          <div className="row gx-6">
            {case_studies.map((item) => {
              const { id, img, title, duration, delay, subtitle } = item;
              return <div key={id} className="col-xl-4 col-lg-4 col-md-6 col-12 wow tpfadeUp"
                data-wow-duration={duration} data-wow-delay={delay}>
                <div className="svcase text-center mb-50">
                  <div className="svcase__img fix">
                    <Image width={390} height={277} src={img} alt="" />
                  </div>
                  <div className="svcase__content">
                    <h4 className="sv-case-sm-title">
                      <Link href={`/portfolio-details/${id}`}>
                        <a>{title}</a>
                      </Link>
                    </h4>
                    <p>{subtitle}</p>
                  </div>
                </div>
              </div>
            })}
          </div>
          <div className="row">
            <div className="col-12">
              <div className="case-button text-center pt-30">
                <button className="tp-btn">View all Casestdies</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseArea;