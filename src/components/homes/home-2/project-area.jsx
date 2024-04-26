import Link from 'next/link';
import Image from "next/image";
import React from 'react';
import ImageLightBox from '../../common/modals/image-lightbox';

const project_contents = {
  subtitle: 'Complete Project',
  title: 'Creative work.',
  shapes: [{ num: 'one', img: 'project-shape-2.webp' }, { num: 'two', img: 'project-shape-3.webp' },],
  project_items: [
    { img: '/assets/img/portfolio/portfolio_1.webp', category: 'Website' },
    { img: '/assets/img/portfolio/portfolio_2.webp', category: 'Website' },
    { img: '/assets/img/portfolio/portfolio_3.webp', category: 'Website' },
    { img: '/assets/img/portfolio/portfolio_4.webp', category: 'Website' },
    { img: '/assets/img/portfolio/port-10.webp', category: 'Landing Page' },
    { img: '/assets/img/portfolio/port-17.webp', category: 'Landing Page' },
    { img: '/assets/img/portfolio/port-10.webp', category: 'ios App' },
    { img: '/assets/img/portfolio/port-11.webp', category: 'ios App' },
    { img: '/assets/img/portfolio/port-11.webp', category: 'Branding Design' },
    { img: '/assets/img/portfolio/port-12.webp', category: 'Branding Design' },
    { img: '/assets/img/portfolio/port-17.webp', category: 'Branding Design' },
  ]
}

const { project_items, shapes, subtitle, title } = project_contents;

const ProjectArea = () => {
  // unique category
  const categories = [...new Set(project_items.map(c => c.category))];
  // category
  const [category, setCategory] = React.useState('Website');
  // category_items
  const category_items = project_items.filter(item => item.category === category);
  // portfolioItems
  const [portfolioItems, setPortfolioItems] = React.useState(category_items);
  // photoIndex
  const [photoIndex, setPhotoIndex] = React.useState(null);
  // image open state
  const [open, setOpen] = React.useState(false);
  // images
  const images = [...new Set(portfolioItems.map(img => img.img))];
  // handleCategory
  const handleCategory = (c) => {
    setCategory(c)
    setPortfolioItems(project_items.filter(item => item.category === c))
  }
  // handleImagePopup
  const handleImagePopup = (index) => {
    setPhotoIndex(index)
    setOpen(true)
  }

  return (
    <>
      <div className="tp-project-area pt-80 pb-80 p-relative">
        {shapes.map((s, i) => <div key={i} className={`tp-project-shape-${s.num}`}>
          <img src={`/assets/img/project/${s.img}`} alt="" />
        </div>)}
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="project-section-box-two text-center pb-20">
                <h5 className="tp-subtitle">{subtitle}</h5>
                <h2 className="tp-title">{title}</h2>
              </div>
            </div>
          </div>
          
          <div className="row grid gx-45">
            {portfolioItems.map((item, i) => (
              <div key={i} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-6  grid-item cat2 cat3">
                <div className="tp-project-item-two p-relative mb-45">
                  <div className="project-one fix">
                    <Image width={626} height={352} className="w-100" src={item.img} alt="" />
                  </div>
                  <div className="tp-project-icon-two">
                    <button onClick={() => handleImagePopup(i)} className="popup-image"><i
                      className="fas fa-long-arrow-up"></i></button>
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
    </>
  );
};

export default ProjectArea;