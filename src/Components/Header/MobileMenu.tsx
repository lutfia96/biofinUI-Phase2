import { Link } from "react-router-dom";

interface MenuItem {
  path: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menus?: MenuItem[];
}

function MobileMenu({ isOpen, onClose, menus }: MobileMenuProps) {
  return (
    <div
      className={`th-menu-wrapper onepage-nav ${
        isOpen ? "th-body-visible" : ""
      }`}
      style={{ visibility: isOpen ? "visible" : "hidden" }}
    >
      <div className="th-menu-area text-center">
        <button className="th-menu-toggle" onClick={onClose} aria-label="Close">
          <i className="fal fa-times" />
        </button>

        <div className="mobile-logo">
          <Link to="/">
            <img src="/assets/img/smz.png" alt="Tourm" />
          </Link>
        </div>

        <div className="th-mobile-menu">
          <ul>
            {menus?.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}

            <li>
              <Link to="/cart" className="">
                <i className="fa-solid fa-cart-shopping" />
              </Link>
            </li>
            <li>
              <button
              //   onClick={() => setShowSearch(true)}
              >
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
