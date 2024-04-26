import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPricing } from "../../redux/features/pricing-slice";
import FreePlan from "./free-plan";
import ScaleupPlan from "./scaleup-plan";
import StartupPlan from "./startup-plan";

const PriceArea = () => {
  const dispatch = useDispatch();
  const pricing = useSelector((state) => state.pricing);

  return (
    <>
      {/* <div className="cp-price-area pt-120 pb-20" id="Package-Plan">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-10">
              <div className="tp-service-section-box text-center pb-60">
                <h5 className="tp-subtitle pb-10">Subscription Levels</h5>
                <h2 className="tp-title-sm">
                  Select the plan that best fits your{" "}
                  <span className="tp-section-highlight">
                    requirements.
                    <svg
                      width="266"
                      height="12"
                      viewBox="0 0 266 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0L266 12H0V0Z"
                        fill={"var(--tp-theme-primary)"}
                      ></path>
                    </svg>
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="quarterly-swicher">
                <p>
                  <b>Monthly</b>
                </p>
                <input
                  id="quarterly"
                  type="checkbox"
                  onChange={(e) => {
                    dispatch(setPricing(e.target.checked));
                  }}
                />
                <label htmlFor="quarterly"></label>
                <p>
                  Quarterly <small>Save 15%</small>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row xecutor-pricing-table-container">
            <FreePlan />
            <StartupPlan />
            <ScaleupPlan />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default PriceArea;
