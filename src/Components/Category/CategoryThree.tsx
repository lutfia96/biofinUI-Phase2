import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { getEntityQuery } from "../../hooks/query/websiteQuery";

function CategoryThree() {
  const { data } = getEntityQuery();

  return (
    <section
      className="category-area3 bg-smoke space"
      style={{ backgroundImage: "url(/assets/img/bg/line-pattern3.png)" }}
    >
      <div className="container th-container">
        <div className="title-area text-center">
          <span className="sub-title">Wonderful Place For You</span>
          <h2 className="sec-title">Tour Categories</h2>
        </div>
        <div className="slider-area">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
              1400: { slidesPerView: 5 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="th-slider has-shadow category-slider3"
          >
            {data?.map((category) => (
              <SwiperSlide key={category.id}>
                <div className="category-card single2">
                  <div className="box-img global-img">
                    <img src={category.featured_image} alt={category.name} />
                  </div>
                  <h3 className="box-title">
                    <Link to="/destination">{category.name}</Link>
                  </h3>
                  <Link className="line-btn" to="/destination">
                    See more
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default CategoryThree;
