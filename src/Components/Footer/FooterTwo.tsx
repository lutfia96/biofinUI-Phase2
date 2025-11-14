import { Link } from "react-router-dom";

function FooterTwo() {
  return (
    <footer className="footer-wrapper bg-title footer-layout2">
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <Link to="/">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-[Montserrat] font-bold leading-tight">
                        <span className="bg-linear-to-r from-teal-500 to-green-400 bg-clip-text text-transparent">
                          Explore Zanzibar
                        </span>
                      </h4>
                    </Link>
                  </div>
                  <p className="about-text">
                    Discover the natural wonders of Zanzibar through sustainable
                    eco-tourism experiences that preserve our heritage.
                  </p>
                  <div className="th-social">
                    <Link to="https://www.facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="https://www.twitter.com/">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="https://www.linkedin.com/">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                    <Link to="https://www.whatsapp.com/">
                      <i className="fab fa-whatsapp" />
                    </Link>
                    <Link to="https://instagram.com/">
                      <i className="fab fa-instagram" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <Link to="/about-fees">About Fees</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Get In Touch</h3>
                <div className="th-widget-contact">
                  <div className="info-box_text">
                    <div className="icon">
                      <img src="/assets/img/icon/phone.svg" alt="img" />
                    </div>
                    <div className="details">
                      <p>
                        <Link
                          to="/tel: +255777861079"
                          className="info-box_link"
                        >
                          +255777861079
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="info-box_text">
                    <div className="icon">
                      <img src="/assets/img/icon/envelope.svg" alt="img" />
                    </div>
                    <div className="details">
                      <p>
                        <Link
                          to="/mailto:info@explorezanzibar.com"
                          className="info-box_link"
                        >
                          info@explorezanzibar.com
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/mailto:support24@tourm.com"
                          className="info-box_link"
                        >
                          support24@tourm.com
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="info-box_text">
                    <div className="icon">
                      <img src="/assets/img/icon/location-dot.svg" alt="img" />
                    </div>
                    <div className="details">
                      <p>Stone Town, Zanzibar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <p className="copyright-text">
                Copyright 2025 <Link to="/">Tourm</Link>. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-end d-none d-md-block">
              <div className="footer-card">
                <span className="title">We Accept</span>
                <img src="/assets/img/shape/cards.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="shape-mockup movingX d-none d-xxl-block"
        style={{
          top: "24%",
          left: "5%",
        }}
      >
        <img src="/assets/img/shape/shape_8.png" alt="shape" />
      </div>
    </footer>
  );
}

export default FooterTwo;
