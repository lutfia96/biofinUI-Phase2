import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import type { Swiper as SwiperType } from "swiper";
import { getPopularQuery } from "../../hooks/query/websiteQuery";

const CategoryOne = () => {
  const swiperRef = useRef<{ swiper: SwiperType } | null>(null);
  const { data: categories } = getPopularQuery();

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

    // ✅ Custom wheel effect for category slider
    const multiplier = {
      translate: 0.1,
      rotate: 0.01,
    };

    const calculateWheel = () => {
      const slides = document.querySelectorAll(".single");
      slides.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const r = window.innerWidth * 0.5 - (rect.x + rect.width * 0.5);
        let ty =
          Math.abs(r) * multiplier.translate -
          rect.width * multiplier.translate;

        if (ty < 0) {
          ty = 0;
        }
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
    <section
      className="category-area bg-top-center"
      style={{
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container th-container">
        <div className="title-area text-center">
          <span className="sub-title">
            Discover Zanzibar's most beloved destinations, from pristine marine
            reserves to lush forest sanctuaries
          </span>
          <h2 className="sec-title">Popular Sites</h2>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
            1400: { slidesPerView: 5 },
          }}
          spaceBetween={40}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1000}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets" as const,
            renderBullet: function (index: number, className: string) {
              const formattedNumber =
                index + 1 < 10 ? "0" + (index + 1) : (index + 1).toString();
              return `<span class="${className} number">${formattedNumber}</span>`;
            },
          }}
          className="th-slider has-shadow categorySlider"
        >
          {categories?.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="category-card single">
                <div className="box-img global-img">
                  <img
                    src={category.featured_image}
                    alt={category.slug!}
                    loading="lazy"
                  />
                </div>
                <h3 className="box-title">
                  <Link to={"site/" + category.slug}>{category.title}</Link>
                </h3>
                <Link className="line-btn" to={"site/" + category.slug}>
                  See more
                </Link>
              </div>
            </SwiperSlide>
          ))}
          <div className="slider-controller w-100 justify-content-center">
            <div
              className="swiper-pagination"
              style={{ maxWidth: "100%" }}
            ></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default CategoryOne;
