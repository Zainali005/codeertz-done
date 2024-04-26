import React, { useState } from 'react';
import Image from "next/image";
import ContactForm from '../forms/contact-form';
import Calendaly from './calendaly';
const CallToAction = () => {
  const [showCalendaly, setShowCalendaly] = useState(false);
  const handleBookCall = () => {
    setShowCalendaly(true);
  };
  return (
    <>
      {showCalendaly && (
        <div className="BookCallModal">
          <div className="BookCallContainer">
            <Calendaly />
            <div className="closeFrame" onClick={() => setShowCalendaly(false)}> close</div>
          </div>
        </div>
      )}
      <div className="container-custom mb-80 container tp-contact-area black-bg pt-20">
        <div className="">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="tp-contct-wrapper">
                <div className="tp-contact-thumb">
                  <img src="/assets/img/contact/angel_partner.webp" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="tpcontact">
                <h4 className="tp-contact-big-title"> Let Us Be Your <b className='text-white'>Partner in Success</b></h4>
                <p className='text-white'>Not sure which option is best for you? Dive into your vision with our first week 100% free trial. No credit card required.</p>
                <button className='tp-btn' onClick={handleBookCall}>Schedule a Call</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;