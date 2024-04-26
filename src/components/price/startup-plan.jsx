import React from "react";
import { useSelector } from "react-redux";
import { pricngData } from "./pricing-plans";

function StartupPlan() {
  const pricing = useSelector((state) => state.pricing);
  const startupPlanFilt = pricngData?.filter(
    (data) => data.planName === "Startup Plan"
  );
  const startupPlanData = startupPlanFilt[0];

  return (
    <div className="col-12 col-lg-4">
      <div className="xecutor-pricing-table">
        <h3>{startupPlanData?.planName}</h3>
        <p>{startupPlanData?.description}</p>

        <div className="xecutor-pricing-inner">
          <h2>
            {" "}
            {!pricing
              ? `$${Number(startupPlanData?.price).toLocaleString()}/m`
              : `$${Math.ceil(
                  startupPlanData?.price * 0.85
                ).toLocaleString()}/m`}{" "}
            {pricing && (
              <label>
                you saved {Math.floor(startupPlanData?.price * 0.15)}{" "}
              </label>
            )}
          </h2>

          {startupPlanData?.features?.map((feature, i) => {
            return (
              <div key={i} className="xecutor-pricing-toggle">
                <input id={feature.fid} name="startup-plan" type="radio" />
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

export default StartupPlan;
