import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Marquee from "react-fast-marquee";

const brand_images = [
  "/assets/img/brand/cf_logo.svg",
  "/assets/img/brand/algolia.svg",
  "/assets/img/brand/amadeus.svg",
  "/assets/img/brand/apollo.svg",
  "/assets/img/brand/stripe.svg",
  "/assets/img/brand/square.svg",
  "/assets/img/brand/microsoft.svg",
  "/assets/img/brand/google.svg",
  "/assets/img/brand/cf_logo.svg",
  "/assets/img/brand/algolia.svg",
  "/assets/img/brand/amadeus.svg",
  "/assets/img/brand/apollo.svg",
  "/assets/img/brand/stripe.svg",
  "/assets/img/brand/square.svg",
];

const Index = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  return (
    <Marquee className="gap-4" speed={50}>
      {brand_images.map((brand, i) => (
        <div className="tp-brand-icon text-center" key={i}>
          <Image loading="eager" width="90" height="30" src={brand} alt="" />
        </div>
      ))}
    </Marquee>
  );
};

export default Index;
