import React from "react";
import CookieConsent from "react-cookie-consent";

const CookieAccept = () => {
  return (
    <CookieConsent
      enableDeclineButton
      //   debug={true}
      location="bottom"
      buttonText="Yes, I Agree"
      cookieName="YourCoockieName"
      style={{ background: "#222831" }}
      buttonStyle={{
        color: "#fff",
        fontSize: "14px",
        padding: "8px 20px",
        borderRadius: "7px",
        background: "#00adb5",
      }}
      declineButtonText="Decline"
      declineButtonStyle={{
        margin: "10px 10px 10px 0",
        fontSize: "14px",
        padding: "8px 20px",
        borderRadius: "7px",
        background: "#fff",
        color: "#000",
      }}
      //   expires={450}
    >
      We use cookies to enhance your browsing experience and to analyze site
      traffic. By clicking "Yes, I Agree", you consent to our use of cookies.
    </CookieConsent>
  );
};
export default CookieAccept;
