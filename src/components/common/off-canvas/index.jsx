import Link from 'next/link';
import React, { useState } from 'react';
import menu_data from '../../../layout/headers/menu-data';
import ContactForm from '../../../layout/headers/ContactForm';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [navTitle, setNavTitle] = useState('');
  const sidebar_contents = {
    title: <>Your digital vision, our execution</>,
    inst_imgs: [
      '/assets/img/offcanvas/insta-1.webp',
      '/assets/img/offcanvas/insta-2.webp',
      '/assets/img/offcanvas/insta-4.webp',
      '/assets/img/offcanvas/insta-4.webp',
    ]
  };
  const { inst_imgs, title } = sidebar_contents;

  const handleCloseForm = () => {
    setShowContactForm(false);
  };

  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle('');
    } else {
      setNavTitle(menu);
    }
  };

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
    setIsOpen(false);
  };

  return (
    <>
      <div className="tp-offcanvas-area">
        <div className={`tpoffcanvas ${isOpen ? 'opened' : ''}`}>
          <div className="tpoffcanvas__logo">
            <Link href="/">
              <a>
                <img src="/assets/img/logo/head-logop.png" alt="" />
              </a>
            </Link>
          </div>
          <div className="tpoffcanvas__close-btn" onClick={() => setIsOpen(false)}>
            <button className="close-btn" aria-label='Close'><i className="fal fa-times-hexagon"></i></button>
          </div>
          <div className="tpoffcanvas__content d-none d-sm-block">
            <p>{title}</p>
          </div>
          <div className="mobile-menu d-lg-none">
            <div className="mm-menu">
              <ul>
                {menu_data.map((menu, i) => (
                  <li key={i} className={!menu.has_dropdown ? '' : navTitle === menu?.title ? "has-droupdown active" : "has-droupdown"}>
                    {menu.has_dropdown && <button onClick={() => openMobileMenu(menu.title)}>{menu.title} </button>}
                    <ul className={navTitle === menu?.title ? "sub-menu active" : "sub-menu"}>
                      {menu?.sub_menus?.map((sub, i) => (
                        <li key={i}><Link href={`${sub.link}`}>{sub.title}</Link></li>
                      ))}
                    </ul>
                    {!menu.has_dropdown && <Link href={menu.link}>{menu.title}</Link>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
          <div className="tpoffcanvas__contact">
            <span ><Link href="#">Contact us</Link></span>
            <ul>
              <li><i className="fas fa-star"></i><a href="mailto:Collaxmail@gmail.com">codeertz@Codeertz.com </a></li>

              <li><i className='fas fa-star' style={{ cursor: 'pointer' }}>
                <a onClick={toggleContactForm} style={{ color: 'white', margin: '0px 15px' }}>Contact Us</a>
              </i></li>
              {showContactForm && (
                <div
                  style={{
                    animation: 'fadeIn 1s ease-in' ,
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: "1000",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#fff",
                      padding: "20px",
                      borderRadius: "8px",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                      position: "relative",
                      width: "500px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        cursor: "pointer",
                        animation: 'fadeIn 1s ease-in' 
                      }}
                      onClick={handleCloseForm}
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    <ContactForm />
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* overlay start */}
      <div onClick={() => setIsOpen(false)} className={`body-overlay ${isOpen ? 'apply' : ''}`}></div>
      {/* overlay end */}
    </>
  );
};

export default Sidebar;
