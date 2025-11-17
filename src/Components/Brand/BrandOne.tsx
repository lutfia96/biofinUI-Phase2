import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

const brands = [
  "smz.png",
  "egaz.png",
  "biofin.png",
  "undp.png",
  "smz.png",
  "egaz.png",
  "biofin.png",
  "undp.png",
];

function BrandOne({ className }) {
  return (
    <div className={`brand-area overflow-hidden ${className}`}>
      <div className="container th-container">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 6 },
            1400: { slidesPerView: 8 },
          }}
          className="brandSlider1"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="brand-box">
                <Link to="#">
                  <img
                    className="original"
                    src={brand}
                    alt="Brand Logo"
                    style={{
                      width: "180px",       // increased width
                      height: "90px",       // increased height
                      objectFit: "contain", // keeps aspect ratio
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                  <img
                    className="gray"
                    src={brand}
                    alt="Brand Logo"
                    style={{
                      width: "180px",
                      height: "90px",
                      objectFit: "contain",
                      display: "block",
                      margin: "0 auto",
                      filter: "grayscale(100%)",
                    }}
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BrandOne;

