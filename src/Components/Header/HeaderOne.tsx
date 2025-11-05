import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import LoginForm from "./LoginForm";

function HeaderOne() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const location = useLocation();

  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/*============================== Header Area ==============================*/}
      <header className="th-header header-layout1">
        <div className="header-top">
          <div className="container th-container">
            <div className="row justify-content-center justify-content-xl-between align-items-center">
              <div className="col-auto d-none d-md-block">
                <div className="header-links">
                  <ul>
                    <li className="d-none d-xl-inline-block">
                      <i className="fa-sharp fa-regular  fa-location-dot" />
                      <span>Zanzibar</span>
                    </li>
                    <li className="d-none d-xl-inline-block">
                      <i className="fa-regular fa-clock" />
                      <span>Sun to Friday</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-right">
                  <div className="header-links">
                    <ul>
                      <li className="d-none d-md-inline-block">
                        <Link to="/faq">FAQ</Link>
                      </li>
                      <li className="d-none d-md-inline-block">
                        <Link to="/contact">Support</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`}>
          {/* Main Menu Area */}
          <div className="menu-area">
            <div className="container th-container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link to="/">
                      <img
                        src="/assets/img/smz.png"
                        alt="Tourm"
                        style={{ height: "80px" }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-auto me-xl-auto">
                  <nav className="main-menu d-none d-xl-inline-block">
                    <ul>
                      <li>
                        <Link
                          className={pathname === "/" ? "active" : ""}
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={pathname === "/marine" ? "active" : ""}
                          to="/marine"
                        >
                          Marine Attractions
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={pathname === "/forest" ? "active" : ""}
                          to="/forest"
                        >
                          Forest Attractions
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={pathname === "/heritage" ? "active" : ""}
                          to="/heritage"
                        >
                          Our Heritage
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={pathname === "/about-fees" ? "active" : ""}
                          to="/about-fees"
                        >
                          About Fees
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={pathname === "/faq" ? "active" : ""}
                          to="/faq"
                        >
                          FAQ
                        </Link>
                      </li>

                      <li>
                        <Link
                          className={pathname === "/contact" ? "active" : ""}
                          to="/contact"
                        >
                          Contact us
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={pathname === "/cart" ? "active" : ""}
                          to="/cart"
                        >
                          Cart
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <button
                    type="button"
                    className="th-menu-toggle d-block d-xl-none"
                    onClick={() => setIsMobileMenuOpen(true)}
                  >
                    <i className="far fa-bars" />
                  </button>
                </div>
                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <Link to="/contact" className="th-btn style3 th-icon">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="logo-bg bg-mask"
              style={{
                WebkitMaskImage: "url(/assets/img/logo_bg_mask.png)",
                maskImage: "url(/assets/img/logo_bg_mask.png)",
              }}
            />
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <LoginForm
        isOpen={isLoginFormOpen}
        onClose={() => setIsLoginFormOpen(false)}
      />
    </>
  );
}

export default HeaderOne;
