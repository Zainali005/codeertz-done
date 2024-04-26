import React from "react";
import Image from "next/image";

const Breadcrumb = ({ title, imgName, back_home = false }) => {
  return (
    <section className="breadcrumb__area  p-relative">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h3 className="breadcrumb__title">
              <span className="tp-highlight">
                {" "}
                <svg
                  width="266"
                  height="12"
                  viewBox="0 0 266 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0L266 12H0V0Z"
                    fill="var(--tp-theme-primary)"
                  ></path>
                </svg>{" "}
                <i>{title}</i>
              </span>
            </h3>
            <p>
              {" "}
              Experience the power of professional services that are tailored to
              your unique business needs. From strategy and planning to
              execution and delivery, our comprehensive services help you
              achieve success and stay ahead of the competition.
            </p>
          </div>
          <div className="col-md-3 text-right title-img">
            <Image
              className="w-auto"
              width={328}
              height={260}
              src={`/assets/img/breadcrum/${imgName}`}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="ac-about-shape-img z-index-1">
        <Image
          width={111}
          height={103}
          src={"/assets/img/breadcrum/ab-shape-1.1.webp"}
          alt=""
        />
      </div>
    </section>
  );
};

export default Breadcrumb;
