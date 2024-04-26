import Link from 'next/link';
import React from 'react';

const PlainContentDark2 = () => {
  return (
    <section className='container-fluid black-bg'>
        <div className="container pt-50">
    <div className="row">
      <div className="col-xl-12 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
        <div className="footer-widget-info text-center">
          <h2 className="tp-footer-title pb-15 text-white">Are you tired of juggling multiple freelancers for different tasks, only to find yourself stuck in the same place?</h2>
          <p className='text-white'> for different tasks but ending up getting nowhere coz</p>
          <p className='text-white'>-> Poor Communication</p>
          <p className='text-white'>-> Conflicting work styles</p>
          <p className='text-white'>-> Lack of clarity</p>
          <p className='text-white'>and the list goes on & on & on</p>
          {/* I have a complete list which I want to show only if somebody cliecks on it and a dropdown opens */}
          <Link href="/contact">
            <a className="tp-btn mb-50">Help Me Xecute, I am stuck</a>
            
          </Link>
        </div>
      </div>
    </div>
  </div>
    </section>
    
  );
};

export default PlainContentDark2;