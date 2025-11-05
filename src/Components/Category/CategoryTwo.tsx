import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import type { Swiper as SwiperType } from "swiper";
import { getPopularQuery } from "../../hooks/query/websiteQuery";

function CategoryTwo() {
  const swiperRef = useRef<{ swiper: SwiperType } | null>(null);

  const { data } = getPopularQuery();

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiperInstance = swiperRef.current.swiper;

    if (swiperInstance.pagination && swiperInstance.params.pagination) {
      const paginationParams = swiperInstance.params.pagination;
      if (typeof paginationParams === "object" && paginationParams.el) {
        paginationParams.renderBullet = function (
          index: number,
          className: string
        ) {
          const formattedNumber =
            index + 1 < 10 ? "0" + (index + 1) : (index + 1).toString();
          return `<span class="${className} number">${formattedNumber}</span>`;
        };
        swiperInstance.pagination.init();
        swiperInstance.pagination.render();
      }
    }

    const multiplier = { translate: 0.1, rotate: 0.0 };

    const calculateWheel = () => {
      const slides = document.querySelectorAll(".single2");
      slides.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const r = window.innerWidth * 0.5 - (rect.x + rect.width * 0.5);
        let ty =
          Math.abs(r) * multiplier.translate -
          rect.width * multiplier.translate;
        if (ty < 0) ty = 0;

        const transformOrigin = r < 0 ? "left top" : "right top";
        (
          slide as HTMLElement
        ).style.transform = `translate(0, ${ty}px) rotate(${
          -r * multiplier.rotate
        }deg)`;
        (slide as HTMLElement).style.transformOrigin = transformOrigin;
      });
    };

    let animationFrameId: number;

    const raf = () => {
      calculateWheel();
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section className="category-area2 bg-top-center">
      <div className="container th-container">
        <div className="title-area text-center">
          <span className="sub-title">Wonderful Place For You</span>
          <h2 className="sec-title">Tour Categories</h2>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          spaceBetween={60}
          slidesPerView={5}
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }}
          breakpoints={{
            300: { slidesPerView: 1, spaceBetween: 30 },
            600: { slidesPerView: 2, spaceBetween: 30 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
            1280: { slidesPerView: 5, spaceBetween: 60 },
          }}
        >
          {data?.map((category) => (
            <SwiperSlide key={category?.id}>
              <div className="category-card single2">
                <div className="box-img global-img">
                  <img src={category?.featured_image} alt={category?.title!} />
                </div>
                <h3 className="box-title">
                  <Link to="/destination">{category?.title}</Link>
                </h3>
                <Link className="line-btn" to="/destination">
                  See more
                </Link>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination position-relative"></div>
        </Swiper>
      </div>
    </section>
  );
}

export default CategoryTwo;
