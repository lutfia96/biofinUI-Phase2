import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";
import { Pagination, EffectFade, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { getCarousalQuery } from "../../hooks/query/websiteQuery";

function BannerOne() {
  const { data } = getCarousalQuery();
  const swiperRef = useRef<{ swiper: SwiperType } | null>(null);

  useEffect(() => {
    const animationProperties = () => {
      document.querySelectorAll("[data-ani]").forEach((element) => {
        const animationName = element.getAttribute("data-ani");
        if (animationName) {
          element.classList.add(animationName);
        }
      });

      document.querySelectorAll("[data-ani-delay]").forEach((element) => {
        const delayTime = element.getAttribute("data-ani-delay");
        if (delayTime) {
          (element as HTMLElement).style.animationDelay = delayTime;
        }
      });
    };

    animationProperties();
  }, []);

  const handleSliderNavigation = (direction: "prev" | "next") => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      if (direction === "prev") {
        swiper.slidePrev();
      } else {
        swiper.slideNext();
      }
    }
  };

  return (
    <div className="th-hero-wrapper hero-1" id="hero">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        speed={1000}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".slider-next",
          prevEl: ".slider-prev",
        }}
        className="th-slider hero-slider-1"
        id="heroSlide1"
      >
        <div className="swiper-wrapper">
          {data?.map((slide) => (
            <SwiperSlide key={slide.title}>
              <div className="hero-inner">
                <div
                  className="th-hero-bg"
                  style={{
                    backgroundImage: `url(${slide.image_path})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="container">
                  <div className="hero-style1">
                    <span
                      className="sub-title style1"
                      data-ani="slideinup"
                      data-ani-delay="0.2s"
                    >
                      {slide.subtitle}
                    </span>
                    <h1
                      className="hero-title"
                      data-ani="slideinup"
                      data-ani-delay="0.4s"
                    >
                      {slide.title}
                    </h1>
                    <div
                      className="btn-group"
                      data-ani="slideinup"
                      data-ani-delay="0.6s"
                    >
                      <Link to="/tour" className="th-btn th-icon">
                        Explore Tours
                      </Link>
                      <Link to="/service" className="th-btn style2 th-icon">
                        Our Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
        <div className="th-swiper-custom">
          <button
            className="slider-arrow slider-prev"
            onClick={() => handleSliderNavigation("prev")}
            aria-label="Previous slide"
          >
            <img src="/assets/img/icon/right-arrow.svg" alt="Previous" />
          </button>
          <div className="swiper-pagination" />
          <button
            className="slider-arrow slider-next"
            onClick={() => handleSliderNavigation("next")}
            aria-label="Next slide"
          >
            <img src="/assets/img/icon/left-arrow.svg" alt="Next" />
          </button>
        </div>
      </Swiper>
    </div>
  );
}

export default BannerOne;
