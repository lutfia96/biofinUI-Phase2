import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import AboutFour from "../Components/About/AboutFour";
import OfferTwo from "../Components/Offer/OfferTwo";
import ElementSection from "../Components/Elements/ElementSection";
import TourGuideTwo from "../Components/Guide/TourGuideTwo";
import TestimonialOne from "../Components/Testimonials/TestimonialOne";
import GalleryFive from "../Components/Gallery/GalleryFive";
import ScrollToTop from "../Components/ScrollToTop";

function About() {
  return (
    <>
      <Breadcrumb title="About Tourm" />
      <AboutFour />
      <OfferTwo />
      <ElementSection className={undefined} />
      <TourGuideTwo />
      <TestimonialOne />
      {/* <BrandOne/> */}
      <GalleryFive />
      <ScrollToTop />
    </>
  );
}

export default About;
