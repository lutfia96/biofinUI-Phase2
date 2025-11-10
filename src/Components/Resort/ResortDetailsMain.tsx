import { Link } from "react-router-dom";
import Posts from "../data/data-resort.json";
import type { SiteBySlugNameResponse } from "../../types/AttractionType";
import PricingForm from "./PricingForm";
import ImageGallery from "../Destination/ImageGallery";

function ResortDetailsMain({ ...details }: SiteBySlugNameResponse) {
  const id = 1;

  const resortPost = Posts.find((post) => post.id === id);

  if (!resortPost) {
    return <div>Post not found!</div>;
  }

  return (
    <section className="space">
      <div className="container shape-mockup-wrap">
        <div className="row">
          <div className="col-xxl-6 col-lg-6">
            <div className="page-single">
              <div className="service-img global-img">
                <img src={details.featured_image} alt="" />
              </div>
              <div className="page-content d-block">
                <h3 className="box-title mt-20" style={{ fontSize: "25px" }}>
                  <Link to="#">{details.title}</Link>
                </h3>
                <p className="blog-text mb-30">{details.content}</p>
              </div>
              <div className="destination-gallery-wrapper">
                <h3 className="page-title mt-30 mb-30">From our gallery</h3>
                <ImageGallery images={details.images} title={details.title} />
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-6">
            <aside className="sidebar-area style3 space-y-2">
              <PricingForm product={details.products} />
              <div
                className="widget widget_offer"
                style={{ background: "url(/assets/img/bg/widget_bg_1.jpg)" }}
              >
                <div className="location-map">
                  <h3 className="page-title mt-45 mb-30">Location</h3>
                  <div className="contact-map style3">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
                      allowFullScreen
                      loading="lazy"
                    />
                    <div className="contact-icon">
                      <img src="/assets/img/icon/location-dot3.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <div
          className="shape-mockup shape1 d-none d-xxl-block"
          style={{ bottom: "35%", right: "-12%" }}
        >
          <img src="/assets/img/shape/shape_1.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape2 d-none d-xl-block"
          style={{ bottom: "31%", right: "-8%" }}
        >
          <img src="/assets/img/shape/shape_2.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape3 d-none d-xxl-block"
          style={{ bottom: "33%", right: "-5%" }}
        >
          <img src="/assets/img/shape/shape_3.png" alt="shape" />
        </div>
      </div>
    </section>
  );
}

export default ResortDetailsMain;
