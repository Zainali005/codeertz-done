import React from "react";

const CaseStudiesDetail = ({ data }) => {
  return (
    <div className="tp-project-area pt-80 p-relative caseSyudy-detail-container">
      <div className="breadcrumb__area p-relative">
        <div className="container container-custom-case">
          <div className="row">
            <div className="col-md-12">
            <h3 className="breadcrumb__title">
              <small>{data?.type}</small>
              <span className="tp-highlight"> <svg width="266" height="12" viewBox="0 0 266 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0L266 12H0V0Z" fill="var(--tp-theme-primary)"></path></svg>
              <i>{data?.name}</i>
              </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-custom-case">
        <div className="row">
          <div className="col-md-12">
            <div className="caseStudyCard detail">
             
              <div className="row caseStudyCard-caption content align-center">
                <div className="col-md-12 text-center">
                <img
                className="casestudy-cover"
                src="../assets/img/case/CaseStudy-New1.webp"
                alt=""
              /> <br /> <br /> <br />
                </div>

                <div className="col-md-12 text-center">
                    <h4> Reimagining Travel Booking: The Story of eTravelo and Codeertz </h4>
                    <p className="case-max-w-p">{data?.introduction}</p>
                </div>
              </div>

              <div className="row caseStudyCard-caption content">
               

                <div className="col-md-6 case-mid-content">
                    <h4>Innovating Beyond the Limits: <br /> How Codeertz Revolutionized eTravelo's Hotel Booking</h4>
                    
                    {/* <p>{data?.challenges}</p> */}
                    <p>Codeertz recently completed a ground-breaking project with eTravelo, an online airline ticket and hotel booking platform. The project, aptly named eTravelo, aimed to revolutionize the travel industry by streamlining the user experience and providing lightning-fast search results. This case study outlines the key challenges faced by eTravelo, the innovative solutions provided by Codeertz, and the impressive results achieved through this collaboration.
</p>
                </div>
                <div className="col-md-6 relative text-right">
                <img
                className="casestudy-cover absolute-img"
                src="../assets/img/case/CaseStudy-New3.webp"
                alt=""
              />
                <img
                className="casestudy-cover"
                src="../assets/img/case/CaseStudy-New2.webp"
                alt=""
              />
                </div>
              </div>

              <div className="row caseStudyCard-caption content">
            
                <div className="col-md-12 text-center">
                
                <h4>Codeertz Enhances eTravelo's User Experience with Lightning-Fast <br /> Speeds and Extensive Booking Options</h4>
                <br /> <br /> <br />
                </div>


                <div className="col-md-5">
                <img
                  className="img-frame border"
                  src="../assets/img/case/CaseStudy-New9.webp"
                  alt=""
                />
                </div>
                <div className="col-md-7 ">
                <p>Codeertz implemented a complete revamp of eTravelo's website, transforming it into a serverless site. This allowed for improved scalability and performance, enabling the platform to handle an increased volume of users without any hiccups.</p>
                <div className="case-inner-content text-center">
                <img width="400" src="../assets/img/case/CaseStudy-New11.webp" alt="" />
                <hr />
                  <p>One of the most significant innovations Codeertz introduced was the automatic booking functionality. This game-changing feature provides instant search results, allowing eTravelo's site to function at lightning-fast speeds. By enhancing the platform's user experience, customers can now quickly and easily book their ideal travel arrangements.</p>
                  <p>Furthermore, Codeertz developed a patented hotel reservation engine that resolved eTravelo's previous issues. This powerful new engine allows eTravelo's customers access to an extensive range of options, many of which are not readily available or easily bookable on other platforms.</p>
                  
                </div>
                </div>
              </div>


              <div className="row caseStudyCard-caption content align-center">

              <div className="col-md-12 text-center">
                    <h4>From Challenges to Success: The Results of Codeertz' <br /> Collaboration with eTravelo</h4>
                    <p className="case-max-w-p case-max-w-p1">
                    eTravelo's management was thoroughly impressed with Codeertz' innovative approach to addressing their challenges. The revamped platform has been praised by customers for its speed, ease of use, and extensive range of options

                      {/* {data?.results} */}
                      </p>
                </div>
                
                <div className="col-md-12 text-center">
                <img
                className="casestudy-cover"
                src="../assets/img/case/CaseStudy-New10.webp"
                alt=""
              />
                </div>

               
              </div>


              

             
          

            </div>
          </div>
        </div>
      </div>

        <div className="container container-custom-case">
          <div className="row">
            <div className="col-md-12">
              <div className="xecu-caseStudy-section">
                <div className="col-md-8">
                <h3>Bring Your Ideas to Life with Codeertz: Book Your Consultation Today</h3>
              <p>Codeertz implemented a complete revamp of eTravelo's website, transforming it into a serverless site. This allowed for improved scalability and performance, enabling the platform to handle an increased volume of users without any hiccups.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      <div className="container container-custom-case">
        <div className="row">
          <div className="col-md-12">
            <div className="caseStudyCard detail">
              <div className="caseStudyCard-caption"> 
                <div className="caseStudyCard-caption-foot">
                  
                  <div className="caseStudyCard-posted">
                    <img src="../assets/img/case/CaseStudy2.webp" alt="" />
                    <h5>
                      {data?.author} <small>{data?.authorDesignation}</small>{" "}
                    </h5>
                  </div>
                  <small>{data?.date}</small>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CaseStudiesDetail;
