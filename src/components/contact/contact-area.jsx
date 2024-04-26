import React from 'react';
import ContactForm from '../forms/contact-form';

const ContactArea = () => {
  return (
    <>
      <div className="tp-contact-area pt-100 pb-100">
        <div className="container">
          <div className="row">
          <div className="col-md-12">
              <div className="tpcontact">
                
                <div className="tpcontact__form tpcontact__form-3">
                  
                  {/* ContactForm start */}
                  <ContactForm />
                  {/* ContactForm end */}
                </div>
                <p className="ajax-response"></p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;