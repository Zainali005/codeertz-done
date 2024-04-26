import React, { useState } from 'react';
import { PopupArrow } from '../../../svg';
import ImageLightBox from '../../common/modals/image-lightbox';

const portfolio_data = [
  { img: '/assets/img/portfolio/port-10.webp', category: 'Website' },
  { img: '/assets/img/portfolio/port-11.webp', category: 'Website' },
  { img: '/assets/img/portfolio/port-12.webp', category: 'Website' },
  { img: '/assets/img/portfolio/port-13.webp', category: 'Website' },
  { img: '/assets/img/portfolio/port-14.webp', category: 'Website' },
  { img: '/assets/img/portfolio/port-15.webp', category: 'Website' },
  { img: '/assets/img/portfolio/port-16.webp', category: 'Website' },
  { img: '/assets/img/portfolio/port-17.webp', category: 'Website' },
  { img: '/assets/img/project/project-6.1.webp', category: 'Website' },
  { img: '/assets/img/portfolio/port-18.webp', category: 'Website' },
  { img: '/assets/img/portfolio/port-10.webp', category: 'Landing Page' },
  { img: '/assets/img/portfolio/port-14.webp', category: 'Landing Page' },
  { img: '/assets/img/portfolio/port-18.webp', category: 'Landing Page' },
  { img: '/assets/img/portfolio/port-12.webp', category: 'ios App' },
  { img: '/assets/img/portfolio/port-10.webp', category: 'ios App' },
  { img: '/assets/img/portfolio/port-15.webp', category: 'ios App' },
  { img: '/assets/img/portfolio/port-16.webp', category: 'ios App' },
  { img: '/assets/img/project/project-6.1.webp', category: 'ios App' },
  { img: '/assets/img/portfolio/port-11.webp', category: 'Branding Design' },
  { img: '/assets/img/portfolio/port-13.webp', category: 'Branding Design' },
  { img: '/assets/img/portfolio/port-17.webp', category: 'Branding Design' },
]
const imagePerRow = 4;

const PortfolioArea = () => {
  const [category, setCategory] = useState('Website');
  const cate_items = portfolio_data.filter(item => item.category === category);
  const [items, setItems] = useState(cate_items);
  const [next, setNext] = useState(imagePerRow);
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [open, setOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (index) => {
    setPhotoIndex(index)
    setOpen(true)
  }
  // handleLoadData
  const handleLoadData = () => {
    setNext(value => value + 2)
  }
  // images 
  const images = items.map(img => img.img);
  // all categories 
  const all_categories = [...new Set(portfolio_data.map(c => c.category))];
  // handleCategory
  const handleCategory = (category) => {
    setNext(imagePerRow)
    setCategory(category)
    setItems(portfolio_data.filter(item => item.category === category))
  }

  return (
    <>
      <div className="tp-project-area pt-120 pb-120 p-relative">
        <div className="container-fluid p-0">
          <div className="row g-0 justify-content-center">
            <div className="col-10 text-center">
              <div className="tp-project-tab-button masonary-menu mb-80">
                {all_categories.map((c, i) => (
                  <button key={i} className={`${c === category ? 'active' : ''}`} 
                  onClick={()=> handleCategory(c)}>
                    <span>{c}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="row grid gx-0 port-space">
            {items?.slice(0, next)?.map((item, i) => (
              <div key={i} className="col-xl-6 col-lg-6 col-md-6">
                <div className="bp-project-item p-relative">
                  <div className="bp-project-img w-img fix">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="bp-project-item-link" onClick={() => handleImagePopup(i)}>
                    <span style={{ cursor: 'pointer' }}>
                      <PopupArrow />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {next < items.length && <div className="row g-0">
            <div className="col-12">
              <div className="tp-project-button text-center">
                <button onClick={handleLoadData} className="tp-btn-yellow">Load More</button>
              </div>
            </div>
          </div>}
        </div>
      </div>

      {/* image light box start */}
      <ImageLightBox images={images} open={open} setOpen={setOpen}
        photoIndex={photoIndex} setPhotoIndex={setPhotoIndex} />
      {/* image light box end */}
    </>
  );
};

export default PortfolioArea;