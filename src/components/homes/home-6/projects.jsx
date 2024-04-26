import React from 'react';
import { HighlightThree, PopupArrow } from '../../../svg';
import ImageLightBox from '../../common/modals/image-lightbox';

const project_contents = {
  subtitle: 'Projects',
  title: <>Collax latest <span className="tp-section-highlight"> project <HighlightThree /> </span></>,
  images: [
    '/assets/img/project/project-6.1.webp',
    '/assets/img/project/project-6.2.webp',
    '/assets/img/project/project-6.3.webp',
    '/assets/img/project/project-6.4.webp',
  ]
}

const { images, subtitle, title } = project_contents;

const Projects = () => {
  // photoIndex
  const [photoIndex, setPhotoIndex] = React.useState(null);
  // image open state
  const [open, setOpen] = React.useState(false);
  // handleImagePopup
  const handleImagePopup = (index) => {
    setPhotoIndex(index)
    setOpen(true)
  }
  return (
    <React.Fragment>
      <div className="tp-project-area pt-130">
        <div className="container-fluid g-0">
          <div className="row gx-0 justify-content-center">
            <div className="col-xl-8">
              <div className="tp-project-section-box text-center">
                <h5 className="tp-subtitle">{subtitle}</h5>
                <h2 className="tp-title-sm pb-65">{title}</h2>
              </div>
            </div>
          </div>
          <div className="row gx-0">
            {images.map((img, i) => (
              <div key={i} className="col-xl-6 col-lg-6 col-md-6">
                <div className="bp-project-item p-relative">
                  <div className="bp-project-img fix w-img">
                    <img src={img} alt="" />
                  </div>
                  <div className="bp-project-item-link">
                    <span>
                      <button className="popup-image" aria-label='PopArrow' onClick={() => handleImagePopup(i)}>
                        <PopupArrow />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* image light box start */}
      <ImageLightBox images={images} open={open} setOpen={setOpen}
        photoIndex={photoIndex} setPhotoIndex={setPhotoIndex} />
      {/* image light box end */}
    </React.Fragment>
  );
};

export default Projects;