import { useState } from "react";
import { Link } from "react-router-dom";
import { getEntityQuery } from "../../hooks/query/websiteQuery";

function DestinationTwo() {
  const { data } = getEntityQuery();
  const [activeIndex, setActiveIndex] = useState(3); // Default active index (Maldives)

  return (
    <div
      className="bg-top-center position-relative space"
      id="destination-sec"
      style={{
        // backgroundImage: "url('/assets/img/bg/line-pattern2.png')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container shape-mockup-wrap">
        <div className="title-area text-center">
          <span className="sub-title">
            Explore our carefully curated attractions supported by Zanzibar's
            Marine and Forest Ministries
          </span>
          <h2 className="sec-title">Discover Zanzibar's Natural Wonders</h2>
        </div>
        <div className="row">
          <div className="destination-list-area">
            {data?.map((item, index) => (
              <div
                key={index}
                className={`destination-list-wrap ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div
                  className="destination-list"
                  style={{
                    backgroundImage: `url(${item.featured_image})`,
                  }}
                >
                  <div className="absolute bottom-1 p-2">
                    <h4 className="box-title">
                      <Link to="">{item.name}</Link>
                    </h4>
                    <span className="destination-subtitle">
                      {item.description}
                    </span>
                  </div>
                  <Link
                    to={`${"attraction/" + item.slug}`}
                    className="th-btn style3"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="destination-btn text-center mt-60">
          <Link to="/destination" className="th-btn style3 th-icon">
            View All
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default DestinationTwo;
