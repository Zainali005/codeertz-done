import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import useSticky from "../../hooks/use-sticky";
import MobileMenu from "./mobile-menu";
import ContactForm from './ContactForm';
import NavMenus from "./nav-menus";
import Calendaly from "../../components/contact/calendaly";


const HeaderFour = () => {
  const { headerSticky } = useSticky();
  const [showCalendaly, setShowCalendaly] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleBookCall = () => {
    setShowContactForm(true);
  };

  const handleCloseForm = () => {
    setShowContactForm(false);
  };

  return (
    <React.Fragment>
      {showCalendaly && (
        <div className="BookCallModal">
          <div className="BookCallContainer">
            <Calendaly />
            <div className="closeFrame" onClick={() => setShowCalendaly(false)}> close</div>
          </div>
        </div>
      )}
      <header className="d-none d-lg-block">
        <div
          id="header-sticky"
          className={`tp-header-area-two header-transparent header-space-three pl-115 pr-115 pt-10 ${headerSticky ? "header-sticky" : ""
            }`}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-2">
                <div className="tp-logo text-start">
                  <Link href="/">
                    <a>
                      <Image
                        width={240}
                        height={100}
                        src={"/assets/img/logo/head-logop.png"}
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div className="tp-main-menu tp-menu-black text-center">
                  <nav id="mobile-menu">
                    {/* nav menus start */}
                    <NavMenus />
                    {/* nav menus end */}
                  </nav>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2">
                <div className="tp-header-left d-flex align-items-center justify-content-end">
                  <div className="tp-header-login login-color-black d-none d-xxl-block ">

                  </div>
                  <div className="tp-header-yellow-button">
                    <button className="tp-btn" onClick={handleBookCall}>Contact Us</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {showContactForm && (
        <div
          style={{
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
            animation: 'fadeIn 1s ease-in'
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
                animation: 'fadeIn 1s ease-in',
                top: "10px",
                right: "10px",
                cursor: "pointer",
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

      {/* <!-- mobile-menu-area --> */}
      <MobileMenu logo={"logo-blue.webp"} />
      {/* <!-- mobile-menu-area-end --> */}
    </React.Fragment>
  );
};

export default HeaderFour;
