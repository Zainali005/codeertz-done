import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const testimonial_data = [
  {
    id: 1,
    user: "/assets/img/testimonial/testi-1.webp",
    name: "Elena Martinez",
    title: "Marketing Director at TechPro",
    ratings: [4, 5, 5, 4, 4],
    desc: "Codeertz exceeded our expectations with their innovative solutions and attention to detail. Their team's professionalism and expertise were instrumental in the success of our project.",
  },
  {
    id: 2,
    user: "/assets/img/testimonial/testi-2.webp",
    name: "David Chen",
    title: "CTO of BrightBit",
    ratings: [5, 4, 4, 5],
    desc: "We were impressed by Codeertz's dedication to understanding our unique requirements and delivering tailored solutions. Their commitment to excellence truly sets them apart.",
  },
  {
    id: 3,
    user: "/assets/img/testimonial/testi-3.webp",
    name: "Sophie Williams",
    title: "CEO of TechNest",
    ratings: [5, 5, 5, 5, 4],
    desc: "Codeertz's professionalism and attention to detail were evident throughout our collaboration. They consistently delivered high-quality work and provided valuable insights. Highly recommend!",
  },
  {
    id: 4,
    user: "/assets/img/testimonial/testi-4.webp",
    name: "John Davis",
    title: "Founder of DigitalSolutions",
    ratings: [5, 5, 4, 5, 5],
    desc: "Codeertz's team went above and beyond to ensure the success of our project. Their expertise and dedication were truly impressive, and we look forward to working with them again in the future.",
  },
];


const testimonial_2_data = [
  {
    id: 1,
    user: "/assets/img/testimonial/testi-1.webp",
    name: "Jennifer Lopez",
    title: "CEO of InnovateTech",
    ratings: [5, 5, 5, 5, 5],
    desc: "Working with Codeertz has been an absolute pleasure. Their team's dedication to excellence is unparalleled. They delivered exceptional results, exceeding our expectations every step of the way.",
  },
  {
    id: 2,
    user: "/assets/img/testimonial/testi-2.webp",
    name: "John Smith",
    title: "CTO of TechWave",
    ratings: [5, 5, 5, 5],
    desc: "Codeertz surpassed all our expectations with their professionalism and expertise. Their attention to detail and commitment to our project's success were truly commendable. We highly recommend their services.",
  },
  {
    id: 3,
    user: "/assets/img/testimonial/testi-3.webp",
    name: "Emily Parker",
    title: "Founder of Digital Innovations",
    ratings: [5, 5, 5, 5, 5],
    desc: "Choosing Codeertz was one of the best decisions we made for our business. Their team's dedication, creativity, and technical prowess are unmatched. We're thrilled with the results they delivered.",
  },
  {
    id: 4,
    user: "/assets/img/testimonial/testi-4.webp",
    name: "Michael Johnson",
    title: "CEO of BrightIdeas",
    ratings: [5, 5, 5, 5, 5],
    desc: "Codeertz's commitment to excellence is evident in every aspect of their work. From communication to execution, they consistently impressed us with their professionalism and skill. Highly recommended!",
  },
];

const Testimonial = () => {
  return (
    <React.Fragment>
      <div className="tp-testimonial-area fix" id="testimonials">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-testimonial-section-box text-center pb-25">
                <h5 className="tp-subtitle">Client Testimonial</h5>
                <h2 className="tp-title tp-white-text">Customer feedback</h2>
              </div>
            </div>
          </div>
          <div className="tp-testimonial-slider-section d-flex justify-content-center mb-50">
            {/* slider start */}

            <Marquee
              className="gap-4 items-center"
              speed={50}
              pauseOnHover={true}
            >
              {testimonial_data.map((item, i) => (
                <div key={i} className="tp-testimonial-item">
                  <div className="tp-testi-meta d-flex justify-content-between mb-20">
                    <div className="tp-testi-icon-box d-flex align-items-center">
                      <div className="tp-testi-img mr-20">
                        <Image
                          width={61}
                          height={61}
                          src={item.user}
                          alt=""
                          loading="eager"
                        />
                      </div>
                      <div className="tp-testi-client-position">
                        <h3>{item.name}</h3>
                        <h6>{item.title}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="tp-testi-p-text">
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </Marquee>
            {/* slider end */}
          </div>

          {/* slider 2 start */}
          <div className="tp-testimonial-slider-section-2 d-flex justify-content-center">
            <Marquee
              className="gap-4 items-center"
              speed={50}
              direction="right"
              pauseOnHover={true}
            >
              {testimonial_2_data.map((item, i) => (
                <div key={i} className="tp-testimonial-item">
                  <div className="tp-testi-meta d-flex justify-content-between mb-20">
                    <div className="tp-testi-icon-box d-flex align-items-center">
                      <div className="tp-testi-img mr-20">
                        <Image
                          width={61}
                          height={61}
                          src={item.user}
                          alt=""
                          loading="eager"
                        />
                      </div>
                      <div className="tp-testi-client-position">
                        <h3>{item.name}</h3>
                        <h6>{item.title}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="tp-testi-p-text">
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
          {/* slider 2 end */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testimonial;
