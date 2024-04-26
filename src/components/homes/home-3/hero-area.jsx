import Link from 'next/link';
import React from 'react';
import useModal from '../../../hooks/use-modal';
import { HighlightTwo } from '../../../svg';
import VideoModal from '../../common/modals/modal-video';

const hero_contents = {
  title: <>Collax helps your teams move work <span className="tp-highlight">
    <HighlightTwo /><i>forward.</i></span></>,
  text: 'At collax we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast efficiency',
  btn_text: 'How it Works',
  video_title: 'Behind the scenes',
  video_id: 'LJbkLdtEW00',
  hero_img: '/assets/img/hero/hero-4.webp'
}
const { title, text, btn_text, hero_img, video_id, video_title } = hero_contents;

const HeroArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <React.Fragment>
      <div className="tp-hero-area-two theme-bg pt-120 p-relative fix">
        <div className="tp-hero-shape-three ">
          <img src="/assets/img/hero/hero-shape-3.webp" alt="" />
        </div>
        <div className="tp-hero-circle-three"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-12">
              <div className="tp-hero-section-box pt-140 pb-200">
                <div className='wow tpfadeUp' data-wow-duration=".3s" data-wow-delay=".6s">
                  <h3 className="ct-hero-title text-white">{title}</h3>
                </div>
                <p className="wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">{text}</p>
                <div className="tp-hero-three-button-box d-flex align-items-center wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                  <div className="xs-bottom-space">
                    <Link href={'/contact'}>
                      <a className="tp-btn-yellow-semilar mr-55">{btn_text}</a>
                    </Link>
                  </div>
                  <div className="tp-hero-paly-button z-index-1">
                    <button onClick={() => setIsVideoOpen(true)} className="popup-video">
                      <i className="far fa-play"></i></button>
                    <span>{video_title}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-12">
              <div className="tp-hero-right-img wow tpfadeRight" data-wow-duration=".9s" data-wow-delay="1.2s">
                <img src={hero_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={video_id} />
      {/* video modal end */}
    </React.Fragment>
  );
};

export default HeroArea;