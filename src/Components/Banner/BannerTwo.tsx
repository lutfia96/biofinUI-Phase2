import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  Pagination,
  A11y,
  EffectFade,
  Autoplay,
  Navigation,
  Thumbs,
} from "swiper/modules";
import { Link } from "react-router-dom";
import { getCarousalQuery } from "../../hooks/query/websiteQuery";
import type { Swiper as SwiperType } from "swiper";

function BannerTwo() {
  const swiperRef = useRef<{ swiper: SwiperType } | null>(null);
  const thumbsSwiperRef = useRef<{ swiper: SwiperType } | null>(null);
  const { data } = getCarousalQuery();

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
        if (delayTime && element instanceof HTMLElement) {
          element.style.animationDelay = delayTime;
        }
      });
    };

    animationProperties();
  }, []);

  const handleSliderNavigation = (direction: "prev" | "next") => {
    if (swiperRef.current?.swiper) {
      const swiper = swiperRef.current.swiper;
      if (direction === "prev") {
        swiper.slidePrev();
      } else {
        swiper.slideNext();
      }
    }
  };

  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    document
      .getElementById("destination-sec")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-2" id="hero">
      <div
        className="hero2-overlay"
        style={{ backgroundImage: "url(/assets/img/bg/line-pattern.png)" }}
      />

      {/* Main Swiper */}
      <Swiper
        modules={[Pagination, Navigation, Thumbs, EffectFade, Autoplay]}
        className="swiper hero-slider-2"
        id="heroSlide2"
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiperRef.current?.swiper || null }}
        effect="fade"
        pagination={{
          el: ".slider-pagination",
          type: "progressbar" as const,
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        watchSlidesProgress={true}
        ref={swiperRef}
      >
        {data?.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="hero-inner">
              <div
                className="th-hero-bg"
                style={{
                  backgroundImage: `url(${item.image_path})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="container">
                <div className="hero-style2">
                  <h1
                    className="hero-title"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    Discover <span className="hero-text">{item.title}</span>
                  </h1>
                  <p
                    className="hero-desc"
                    data-ani="slideinup"
                    data-ani-delay="0.5s"
                  >
                    {item.subtitle}
                  </p>
                  <div
                    className="btn-group"
                    data-ani="slideinup"
                    data-ani-delay="0.6s"
                  >
                    <Link
                      to="/destination"
                      className="th-btn white-btn th-icon"
                    >
                      Explore Tours
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="th-swiper-custom">
        <div className="slider-pagination"></div>
        <div className="hero-icon">
          <button
            className="hero-arrow slider-prev"
            onClick={() => handleSliderNavigation("prev")}
            aria-label="Previous slide"
          >
            <img src="/assets/img/icon/hero-arrow-left.svg" alt="Previous" />
          </button>
          <button
            className="hero-arrow slider-next"
            onClick={() => handleSliderNavigation("next")}
            aria-label="Next slide"
          >
            <img src="/assets/img/icon/hero-arrow-right.svg" alt="Next" />
          </button>
        </div>
      </div>

      {/* Thumbs Swiper */}
      <Swiper
        modules={[Pagination, Navigation, A11y]}
        className="heroThumbs style2"
        id="heroSlide3"
        spaceBetween={10}
        slidesPerView={2}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".slider-next",
          prevEl: ".slider-prev",
        }}
        loop={true}
        watchSlidesProgress={true}
        slideToClickedSlide={true}
        centeredSlidesBounds={true}
        ref={thumbsSwiperRef}
      >
        {data?.map((it) => (
          <SwiperSlide>
            <div className="hero-inner">
              <div className="hero-card">
                <div className="hero-img">
                  <img src={it.image_path} alt="Mountain Tour" />
                </div>
                <div className="hero-card_content">
                  <h3 className="box-title">{it.title}</h3>
                  <span className="d-block">
                    <i className="fa-light fa-clock" />7 Days
                  </span>
                  <Link to="/destination/1" className="th-btn style2">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="scroll-down">
        <Link
          to="#destination-sec"
          onClick={handleScroll}
          className="scroll-wrap"
        >
          <span>
            <img src="/assets/img/icon/down-arrow.svg" alt="Scroll down" />
          </span>
          Scroll Down
        </Link>
      </div>
    </div>
  );
}

export default BannerTwo;
