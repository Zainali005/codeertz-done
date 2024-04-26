import React from 'react';

const accordion_items = [
  { id: 'one', show: true, title: 'Is my data safe?', desc: "A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results." },
  { id: 'two', title: 'How does the 30-day free software trial work?', desc: "A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results." },
  { id: 'three', title: 'What happens after my free trial?', desc: "A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results." },
  { id: 'four', title: 'What makes LessAccounting better than the rest?', desc: "A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results." },
  { id: 'five', title: 'Is my data safe?', desc: "A dedicated product design team can help you achieve your business goals. Whether you need to craft an idea for a completely new product or elevate the quality of an existing solution, we’ll help you to create a product that is laser targeted to your users’ needs and delivers business results." },
]

const AccordionArea = () => {
  return (
    <>
      <div className="sd-accordio-area grey-bg pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <h3 className="tp-title-sm mb-90">Solutions: all your questions answered</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-custom-accordio">
                <div className="accordion" id="accordionExample">

                  {accordion_items.map((item, i) => {
                    const { id, show, title, desc } = item;
                    return <div key={id} className={`accordion-items ${show ? 'faq-accordio-border' : ''}`}>
                      <h2 className="accordion-header" id={`heading-${id}`}>
                        <button className={`accordion-buttons ${show ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${id}`}
                          aria-expanded={show ? 'true' : 'false'} aria-controls={`collapse-${id}`}>
                          {title}
                        </button>
                      </h2>
                      <div id={`collapse-${id}`} className={`accordion-collapse collapse ${show ? 'show' : ''}`} aria-labelledby={`heading-${id}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          {desc}
                        </div>
                      </div>
                    </div>
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordionArea;