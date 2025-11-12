import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import LoginForm from "./LoginForm";
import GlobalSearchModal from "./GlobalSearchModal";

function HeaderOne() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { pathname } = useLocation();
  const [cartLength, setCartLength] = useState(() => {
    const storageCart = JSON.parse(localStorage.getItem("cart")!) || [];
    return storageCart.length;
  });
  const updateCartLength = () => {
    const storageCart = JSON.parse(localStorage.getItem("cart")!) || [];
    setCartLength(storageCart.length);
  };

  useEffect(() => {
    updateCartLength();
    const handleStorageChange = () => {
      updateCartLength();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("cartUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cartUpdated", handleStorageChange);
    };
  }, []);
  // Simplified scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation menu items
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/attraction/marine", label: "Marine Attractions" },
    { path: "/attraction/forest", label: "Forest Attractions" },
    { path: "/attraction/heritage", label: "Our Heritage" },
    { path: "/about-fees", label: "About Fees" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact us" },
  ];

  return (
    <>
      {/* Header Area */}
      <header className="th-header header-layout1 bg-linear-to-r from-blue-100 via-green-200 to-blue-300">
        {/* Top Banner */}
        <div className="header-top bg-linear-to-r from-blue-50 via-green-100 to-blue-100">
          <div className="container th-container">
            <div className="flex flex-row items-center justify-center gap-4 py-0 m-[0.5px] relative">
              <img
                src="/assets/img/smz.png"
                alt="Zanzibar Flag"
                className="w-16 h-12 sm:w-20 sm:h-16 object-contain absolute left-0"
              />

              <div className="flex-1 text-center max-w-2xl">
                <h5 className="text-base sm:text-lg lg:text-xl font-[Montserrat] font-bold text-slate-800">
                  <span className="block font-[Poppins] font-bold text-black">
                    The Revolutionary Government of Zanzibar
                  </span>
                </h5>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-[Montserrat] font-bold mt-2">
                  <span className="bg-linear-to-r from-teal-500 to-green-400 bg-clip-text text-transparent">
                    Explore Zanzibar
                  </span>
                </h4>
              </div>

              <img
                src="/assets/img/zanzibar_flag.webp"
                alt="Zanzibar Flag"
                className="w-16 h-12 sm:w-20 sm:h-16 object-contain absolute right-0"
              />
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`}>
          <div className="menu-area">
            <div className="container th-container">
              <div className="flex items-center justify-between">
                {/* Logo - Empty for now */}
                <div className="header-logo">
                  <Link to="/">{/* Add logo here if needed */}</Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="main-menu d-none d-xl-inline-block">
                  <ul>
                    {menuItems.map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          className={pathname === item.path ? "active" : ""}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                  type="button"
                  className="th-menu-toggle d-block d-xl-none"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <i className="far fa-bars" />
                </button>
                <div className="col-auto d-none d-xl-block">
                  <div className="header-icon">
                    <button onClick={() => setShowSearch(true)}>
                      <i
                        className="fa-solid text-lg fa-magnifying-glass"
                        style={{ fontSize: "20px" }}
                      ></i>
                    </button>
                    <Link
                      className={pathname === "/cart" ? "active" : ""}
                      to="/cart"
                    >
                      <i className="fa-solid fa-cart-shopping">
                        {cartLength > 0 && (
                          <span className="absolute bg-blue-500 text-white text-xs font-bold rounded-full px-1.5 min-w-[1.2rem] text-center">
                            {cartLength}
                          </span>
                        )}
                      </i>
                    </Link>
                    {showSearch && (
                      <GlobalSearchModal
                        onClose={() => setShowSearch(false)}
                        isOpen
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Background Logo Mask */}
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

      {/* Modals */}
      {showSearch && (
        <GlobalSearchModal onClose={() => setShowSearch(false)} isOpen />
      )}
      <MobileMenu
        menus={menuItems}
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

// Export function to trigger cart update event
export const triggerCartUpdate = () => {
  window.dispatchEvent(new Event("cartUpdated"));
};
