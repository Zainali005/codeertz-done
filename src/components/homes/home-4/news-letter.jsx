import React from 'react';

const news_letter_contents = {
  bg_img: '/assets/img/news/news-bg.webp',
  subtitle: 'Get every update',
  title: 'Subscribe newslater get latest updates and deals',
  btn_text: 'Subscribe',
  img: '/assets/img/news/news-3.webp',
}

const { bg_img, btn_text, img, subtitle, title } = news_letter_contents;

const NewsLetter = () => {
  return (
    <div className="tp-news-letter-area tp-news-letter-bg pt-130 pb-130" 
    style={{backgroundImage:`url(${bg_img})`}} >
      <div className="container">
        <div className="row align-items-center wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
          <div className="col-xl-7 col-lg-7 col-md-12 ">
            <div className="tp-news-sub-wrapper pr-50">
              <div className="tp-news-letter-section-box">
                <h5 className="tp-subtitle subtitle-secondary-color">{subtitle}</h5>
                <h2 className="tp-title-sm tp-title-sm tp-white-text pb-25">{title}</h2>
              </div>
              <div className="tp-news-button p-relative">
                <form onSubmit={e => e.preventDefault()}>
                  <input type="text" placeholder="Enter your mail" />
                  <button className="tp-submit-button tp-btn-yellow" type="submit">{btn_text} <i
                    className="fal fa-long-arrow-right"></i></button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-12">
            <div className="tp-news-letter-img text-md-start text-lg-end pr-45">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;