import React from "react";
import { HighlightTwo } from "../../svg";

// const accordion_items = [
//   {
//     id: "one",
//     show: true,
//     title: "What exactly is included in the subscription plans?",
//     desc: "Our subscription plans include a range of services, such as unlimited custom design and changes, unlimited development and changes, project management, regular meetings and planning out the project along with various additional services depending on the plan you choose. Please refer to the subscription plan table for a full list of features and services.",
//   },
//   {
//     id: "two",
//     title:
//       "Is there a limit to the number of design or development projects we can submit per month?",
//     desc: "No, there is no limit to the number of design or development projects you can submit per month. Our subscription plans offer unlimited design, development, and changes, along with up to a specific number of service credits per month depending on your plan.",
//   },
//   {
//     id: "three",
//     title: "What are service credits?",
//     desc: "Service credits are actually the number of hours you get each month to spend on different services provided by Codeertz. (1 Service Credit = 1 Hour of work done)",
//   },
//   {
//     id: "four",
//     title: "What if I consume my service credits before the end of the month?",
//     desc: "You can top up your service credits if you happen to consume your quota before the end of the month",
//   },
//   {
//     id: "five",
//     title: "What is the cost of additional service credits?",
//     desc: "Each additional service credit will cost $35.",
//   },
//   {
//     id: "six",
//     title:
//       "What if there are service credits remaining at the end of the month?",
//     desc: "Your service credits will get transferred to the next month's balance if you ever happened to have not consumed your complete service credits in a month (Monthly plan subscribers will have to purchase the subscription of the next month in 7 days to get their service credits added to the balance of the next month)",
//   },
//   {
//     id: "seven",
//     title:
//       "How long will it take for our design or development requests to be completed?",
//     desc: "The time it takes to complete your requests will depend on the complexity of the project and the number of other projects in the queue. However, we strive to complete all requests as quickly as possible and will communicate with you throughout the process to provide updates on the status of your projects.",
//   },
//   {
//     id: "eight",
//     title: "Is there a limit to how many requests I can have?",
//     desc: "By the term unlimited, we really mean unlimited. You can make as many requests as you’d want until you get satisfied with the work done",
//   },
//   {
//     id: "nine",
//     title: "Can I cancel our subscription at any time?",
//     desc: "Yes, you can cancel your subscription at any time. However, please note that we do not offer refunds for unused portions of your subscription.",
//   },
// ];

const FaqArea = () => {
  return (
    <>
      {/* <div id="faq-section" className="sd-accordio-area pt-80 pb-80 grey-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-10">
              <div className="tp-service-section-box text-center pb-60">
                <h5 className="tp-subtitle pb-10">FAQ</h5>
                <h2 className="tp-title-sm">
                  How can we{" "}
                  <span className="tp-section-highlight">
                    help you?
                    <HighlightTwo />
                  </span>
                </h2>
                <p>
                  Find help or advice from us professional team Fast or get in
                  touch...
                </p>
                <form action="" className='search-faqs'>
                <input placeholder='Search...' type="search" />
                <button> <img src="assets/img/feature/search-icon.svg" alt="" /> </button>
              </form> 
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-custom-accordio faq-accordio-border">
                <div className="accordion" id="accordionExample">
                  {accordion_items.map((item, i) => {
                    const { id, show, title, desc } = item;
                    return (
                      <div key={id} className="accordion-items">
                        <h2 className="accordion-header" id={`heading-${id}`}>
                          <button
                            className={`accordion-buttons ${
                              show ? "" : "collapsed"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse-${id}`}
                            aria-expanded={show ? "true" : "false"}
                            aria-controls={`collapse-${id}`}
                          >
                            {title}
                          </button>
                        </h2>
                        <div
                          id={`collapse-${id}`}
                          className={`accordion-collapse collapse ${
                            show ? "show" : ""
                          }`}
                          aria-labelledby={`heading-${id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">{desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default FaqArea;
