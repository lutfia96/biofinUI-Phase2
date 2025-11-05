import FooterTwo from "../Components/Footer/FooterTwo";
import ScrollToTop from "../Components/ScrollToTop";
import HeaderOne from "../Components/Header/HeaderOne";
import { Outlet } from "react-router-dom";

function HomeTwo() {
  return (
    <div>
      <ScrollToTop />
      <HeaderOne />
      <Outlet />
      <FooterTwo />
    </div>
  );
}

export default HomeTwo;
