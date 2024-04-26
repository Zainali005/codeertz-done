import React from 'react';
import Image from "next/image";
import useModal from '../../hooks/use-modal';
import VideoModal from '../common/modals/modal-video';

const contents = {
  title:'Building software for world changers',
  video_title:'See Demo Video',
  video_id:'8D6b3McyhhU',
  right_text_1:"Collax builds digital products that let people do things differently. Share your challenge with our team, and we’ll work with you to deliver a revolutionary digital product. Our clients have changed the way people do banking, listen to music.",
  right_text_2:"learn languages, and rent bikes. Their products have been featured in TechCrunch, Business Insider, and Product Hunt.",
  client_icon:'/assets/img/about/testi-7.webp',
  client_name:'Wiktor Schmidt',
  client_title:'Executive Chairman (orix)',
  desc:"Wow. What a great experience with this copywriter. collax is a very talented digital agnecy. yesterday.",
  about_img:'/assets/img/breadcrum/ab-1.2.webp',
  about_img2:'/assets/img/about/about-6.1.webp',
}
const {about_img,about_img2,client_icon,client_name,client_title,desc,right_text_1,right_text_2,title,video_id,video_title} = contents;

const AboutArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <div className="ac-about-content-area pt-80">
        <div className="container">
          <div className="ac-border-bottom pb-60">
            <div className="row">
              
              <div className="col-md-12 wow tpfadeRight" data-wow-duration=".2s" data-wow-delay=".2s">
               <div className='row'>
                <div className='col-md-6'>
                  <div className="ac-testimonial-right">
                    <Image width={636} height={440} src={about_img2} alt="" />
                  </div>
                </div>
                <div className='col-md-6'>
                <h3 className="ac-ab-title"><a href="#">{title}</a></h3>
                <p className="pb-25">{right_text_1}</p>
                  <p>{right_text_2}</p>
                </div>
               </div>
                  
              </div>
            </div>
          </div>
          <div className="row pt-60">
            <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
              <div className="ac-testimonial-info">
                <div className="actestimonial">
                  <div className="actestimonial__icon">
                    <Image width={69} height={69} src={client_icon} alt="" />
                  </div>
                  <div className="actestimonial__position">
                    <h4 className="ac-client-name"><a href="#">{client_name}</a></h4>
                    <span>{client_title}</span>
                  </div>
                  <div className="actestimonial__paragraph">
                    <p> <span><i className="fas fa-quote-right"></i></span>{desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
              <div className="ac-testimonial-right">
                <Image width={636} height={421} src={about_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={video_id} />
      {/* video modal end */}
    </>
  );
};

export default AboutArea;