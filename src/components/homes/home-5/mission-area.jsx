import React from 'react';
import { HighlightThree } from '../../../svg';

const SvgHighlight = () => (<svg width="201" height="12" viewBox="0 0 201 12" fill="none" 
xmlns="http://www.w3.org/2000/svg"> <path d="M0 0L201 12H0V0Z" fill="#FFDC60" />
</svg>)

const contents = {
  shapes: [
    'mission-shape-5.1.webp',
    'mission-shape-5.6.webp',
    'mission-shape-5.3.webp',
  ],
  tabs: [
    { active: true, id: 'mission', title: 'Our Mission' },
    { id: 'vision', title: 'Our Mission' },
    { id: 'value', title: 'Our Value' },
  ],
  tab_contents: [
    {
      show: true, id: 'mission',
      title: <>We laed your <span className="tp-section-highlight"> business <SvgHighlight /> </span> team to victory</>,
      text_1: <>We are a team of passionate business consultant,s & Technology <br /> veterans eager to help companies rech their full potential.</>,
      text_2: <>By understanding the client,s condition and leveraging our best
        experience and knowledge. we support reform by recommending the most appropriate methods and resources.By understanding the client,s condition and leveraging our experience and knowledge. we support reform by recommending the most .</>
    },
    {
      id: 'vision',
      title: <>Our vision is to <span className="tp-section-highlight"> provide <HighlightThree /> </span>
        better service - in over the world</>,
      text_1: <>We are a team of passionate business consultant,s & Technology <br /> veterans eager to help companies rech their full potential.</>,
      text_2: <>By understanding the client,s condition and leveraging our best
        experience and knowledge. we support reform by recommending the most appropriate methods and resources.By understanding the client,s condition and leveraging our experience and knowledge. we support reform by recommending the most .</>
    },
    {
      id: 'value',
      title: <>Work with one of the fastest-growing <span className="tp-section-highlight"> digital
        <HighlightThree /> </span> consultancies</>,
      text_1: <>We are a team of passionate business consultant,s & Technology <br /> veterans eager to help companies rech their full potential.</>,
      text_2: <>By understanding the client,s condition and leveraging our best
        experience and knowledge. we support reform by recommending the most appropriate methods and resources.By understanding the client,s condition and leveraging our experience and knowledge. we support reform by recommending the most .</>
    },
  ],
  img:'/assets/img/mission/collage.webp'
}

const { shapes, tabs, tab_contents,img } = contents;

const MissionArea = () => {
  return (
    <div className="tp-mission-area pt-130 p-relative">
      {shapes.map((s, i) => (
        <div key={i} className={`bp-mission-shape-${i+1} d-none d-lg-block`}>
          <img src={`/assets/img/mission/${s}`} alt=""/>
        </div>
      ))}
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-11 wow tpfadeLeft" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="tp-mission-tab-section pb-10">
              <nav>
                <div className="nav tp-mission-tab" id="nav-tab" role="tablist">
                  {tabs.map((tab) => (
                  <button key={tab.id} className={`nav-links ${tab.active?'active':''}`} id={`nav-${tab.id}-tab`} data-bs-toggle="tab" data-bs-target={`#${tab.id}`} type="button" role="tab" aria-controls={`nav-${tab.id}-tab`} aria-selected={tab.active?'true':'false'} tabIndex='-1'><span>{tab.title}</span></button>
                  ))}
                </div>
              </nav>
            </div>
            <div className="tab-content" id="nav-tabContent">
              {tab_contents.map((item) => {
                const {id,text_1,text_2,title,show} = item;
                return <div key={id} className={`tab-pane fade ${show?'show active':''}`} id={id} 
                role="tabpanel" aria-labelledby={`nav-${id}-tab`}>
                <div className="tpmission">
                  <div className="tpmission__content">
                    <h2 className="tp-mission-title">{title}</h2>
                    <p className="pb-20">{text_1}</p>
                    <p>{text_2}</p>
                  </div>
                </div>
              </div>
              })}
            </div>
          </div>
          <div className="col-xl-6 col-lg-5 col-md-12 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="tp-mission-img">
              <img src={img} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionArea;
