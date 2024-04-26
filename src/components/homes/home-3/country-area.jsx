import React from 'react';

const country_contents = {
  subtitle:'World Wide Customer',
  title:'We are in over 18+',
  highlight_text:'country',
  country_img:'/assets/img/country/country.webp',
}
const {highlight_text,subtitle,title,country_img} = country_contents;

const CountryArea = () => {
  return (
    <div className="tp-country-area pt-125 fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-country-sectiontitle-box text-center">
              <h5 className="tp-subtitle">{subtitle}</h5>
              <h2 className="tp-title">{title}
                <span className="tp-section-highlight">
                  {highlight_text}
                  <svg width="205" height="11" viewBox="0 0 205 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L205 11H0V0Z" fill={"var(--tp-theme-primary)"} />
                  </svg>
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-country-img text-center">
              <img src={country_img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryArea;