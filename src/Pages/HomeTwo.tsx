import FooterTwo from "../Components/Footer/FooterTwo";
import HeaderOne from "../Components/Header/HeaderOne";
import { Outlet } from "react-router-dom";
import LoadTop from "../Components/LoadTop";
import ScrollToTop from "../Components/ScrollToTop";

function HomeTwo() {
  return (
    <div>
      <LoadTop />
      <HeaderOne />
      <Outlet />
      <FooterTwo />
      <ScrollToTop />
    </div>
  );
}

export default HomeTwo;
