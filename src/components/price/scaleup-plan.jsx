import React from "react";
import { useSelector } from "react-redux";
import { pricngData } from "./pricing-plans";

function ScaleupPlan() {
  const pricing = useSelector((state) => state.pricing);
  const scaleupPlanFilt = pricngData?.filter(
    (data) => data.planName === "Scale-Up Plan"
  );
  const scaleupPlanData = scaleupPlanFilt[0];

  return (
    <div className="col-12 col-lg-4">
      <div className="xecutor-pricing-table">
        <h3>{scaleupPlanData?.planName}</h3>
        <p>{scaleupPlanData?.description}</p>

        <div className="xecutor-pricing-inner">
          <h2>
            {!pricing
              ? `$${Number(scaleupPlanData?.price).toLocaleString()}/m`
              : `$${Math.ceil(
                  scaleupPlanData?.price * 0.85
                ).toLocaleString()}/m`}{" "}
            {pricing && (
              <label>
                you saved {Math.floor(scaleupPlanData?.price * 0.15)}{" "}
              </label>
            )}
          </h2>

          {scaleupPlanData?.features?.map((feature, i) => {
            return (
              <div key={i} className="xecutor-pricing-toggle">
                <input id={feature.fid} name="scaleup-plan" type="radio" />
                <label htmlFor={feature.fid}>
                  {" "}
                  {feature?.freeLabel && <small>Free</small>} {feature?.name}
                </label>
                <div className="xecutor-pricing-content">
                  <p> {feature?.description}</p>
                </div>
              </div>
            );
          })}

          <div className="text-center">
            <a className="Xecutebtn tp-btn" href="#">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScaleupPlan;
