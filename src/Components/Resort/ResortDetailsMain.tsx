import { useState } from "react";
import { Link } from "react-router-dom";
import Posts from "../data/data-resort.json";
import Modal from "../Gallery/Modal";
import type { SiteBySlugNameResponse } from "../../types/AttractionType";

function ResortDetailsMain({ ...details }: SiteBySlugNameResponse) {
  const id = 1;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const resortPost = Posts.find((post) => post.id === id);

  if (!resortPost) {
    return <div>Post not found!</div>;
  }

  const openModal = (imageSrc: string, event: any) => {
    event.preventDefault();
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="space">
      <div className="container shape-mockup-wrap">
        <div className="row">
          <div className="col-xxl-8 col-lg-7">
            <div className="page-single">
              <div className="service-img global-img">
                <img src={details.featured_image} alt="" />
              </div>
              <div className="page-content d-block">
                <h3 className="box-title mt-20">
                  <Link to="#">{details.title}</Link>
                </h3>
                <p className="blog-text mb-30">{details.content}</p>
              </div>
              <div className="destination-gallery-wrapper">
                <h3 className="page-title mt-30 mb-30">From our gallery</h3>
                {details.images.map((res) => (
                  <div className="row gy-4 gallery-row filter-active">
                    <div className="col-xxl-auto filter-item">
                      <div className="gallery-box style3">
                        <div className="gallery-img global-img">
                          <img src={res.url} alt="gallery" />
                          <Link
                            to={res.title}
                            className="icon-btn popup-image"
                            onClick={(e) => openModal(res.url, e)}
                          >
                            <i className="fal fa-magnifying-glass-plus" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Comment end */} {/* Comment Form */}
              {/* <div className="th-comment-form ">
                                <div className="row">
                                    <h3 className="blog-inner-title h4 mb-2">Leave a Reply</h3>
                                    <p className="mb-25">
                                        Your email address will not be published. Required fields are
                                        marked
                                    </p>
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="Full Name*"
                                            className="form-control"
                                            required=""
                                        />
                                        <i className="far fa-user" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="Your Email*"
                                            className="form-control"
                                            required=""
                                        />
                                        <i className="far fa-envelope" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <input
                                            type="text"
                                            placeholder="Website"
                                            className="form-control"
                                            required=""
                                        />
                                        <i className="far fa-globe" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <textarea
                                            placeholder="Comment*"
                                            className="form-control"
                                            defaultValue={""}
                                        />
                                        <i className="far fa-pencil" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <input type="checkbox" id="html" />
                                        <label htmlFor="html">
                                            Save my name, email, and website in this browser for the next
                                            time I comment.
                                        </label>
                                    </div>
                                    <div className="col-12 form-group mb-0">
                                        <button className="th-btn">
                                            Send Message
                                            <img src="/assets/img/icon/plane2.svg" alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div> */}
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area style3">
              {/* <div className="widget widget_search  ">
                                <form className="search-form">
                                    <input type="text" placeholder="Search" />
                                    <button type="submit">
                                        <i className="far fa-search" />
                                    </button>
                                </form>
                            </div> */}
              <div className="widget widget_categories  ">
                <h3 className="widget_title">Categories</h3>
                <ul>
                  <li>
                    <Link to="/blog">
                      <img src="/assets/img/theme-img/map.svg" alt="" />
                      City Tour
                    </Link>
                    <span>(8)</span>
                  </li>
                  <li>
                    <Link to="/blog">
                      <img src="/assets/img/theme-img/map.svg" alt="" />
                      Beach Tours
                    </Link>
                    <span>(6)</span>
                  </li>
                  <li>
                    <Link to="/blog">
                      <img src="/assets/img/theme-img/map.svg" alt="" />
                      Wildlife Tours
                    </Link>
                    <span>(2)</span>
                  </li>
                  <li>
                    <Link to="/blog">
                      <img src="/assets/img/theme-img/map.svg" alt="" />
                      News &amp; Tips
                    </Link>
                    <span>(7)</span>
                  </li>
                  <li>
                    <Link to="/blog">
                      <img src="/assets/img/theme-img/map.svg" alt="" />
                      Adventure Tours
                    </Link>
                    <span>(9)</span>
                  </li>
                  <li>
                    <Link to="/blog">
                      <img src="/assets/img/theme-img/map.svg" alt="" />
                      Mountain Tours
                    </Link>
                    <span>(10)</span>
                  </li>
                </ul>
              </div>
              {/* <div className="widget  ">
                                <h3 className="widget_title">Recent Posts</h3>
                                <div className="recent-post-wrap">
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link to="/blog/1">
                                                <img
                                                    src="/assets/img/blog/recent-post-1-1.jpg"
                                                    alt="Blog"
                                                />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog/1">
                                                    Exploring The Green Spaces Of the island maldives
                                                </Link>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <Link to="/blog">
                                                    <i className="fa-regular fa-calendar" />
                                                    22/6/ 2025
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link to="/blog/1">
                                                <img
                                                    src="/assets/img/blog/recent-post-1-2.jpg"
                                                    alt="Blog"
                                                />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog/1">
                                                    Harmony With Nature Of Belgium Tour and travle
                                                </Link>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <Link to="/blog">
                                                    <i className="fa-regular fa-calendar" />
                                                    25/6/ 2025
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <Link to="/blog/1">
                                                <img
                                                    src="/assets/img/blog/recent-post-1-3.jpg"
                                                    alt="Blog"
                                                />
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog/1">
                                                    Exploring The Green Spaces Of Realar Residence
                                                </Link>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <Link to="/blog">
                                                    <i className="fa-regular fa-calendar" />
                                                    27/6/ 2025
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
              {/* <div className="widget widget_tag_cloud  ">
                                <h3 className="widget_title">Popular Tags</h3>
                                <div className="tagcloud">
                                    <Link to="/blog">Tour</Link>
                                    <Link to="/blog">Adventure</Link>
                                    <Link to="/blog">Rent</Link>
                                    <Link to="/blog">Innovate</Link>
                                    <Link to="/blog">Hotel</Link>
                                    <Link to="/blog">Modern</Link>
                                    <Link to="/blog">Luxury</Link>
                                    <Link to="/blog">Travel</Link>
                                </div>
                            </div> */}
              <div
                className="widget widget_offer"
                style={{ background: "url(/assets/img/bg/widget_bg_1.jpg)" }}
              >
                {/* <div className="offer-banner">
                                    <div className="offer">
                                        <h6 className="box-title">
                                            Need Help? We Are Here To Help You
                                        </h6>
                                        <div className="banner-logo">
                                            <img src="/assets/img/logo2.svg" alt="Tourm" />
                                        </div>
                                        <div className="offer">
                                            <h6 className="offer-title">You Get Online support</h6>
                                            <Link className="offter-num" to={+256214203215}>
                                                +256 214 203 215
                                            </Link>
                                        </div>
                                        <Link to="/contact" className="th-btn style2 th-icon">
                                            Read More
                                        </Link>
                                    </div>
                                </div> */}
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
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        imageSrc={modalImage}
      />
    </section>
  );
}

export default ResortDetailsMain;
