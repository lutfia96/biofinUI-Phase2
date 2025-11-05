import BannerTwo from "./Banner/BannerTwo";
import BrandOne from "./Brand/BrandOne";
import CategoryOne from "./Category/CategoryOne";
import DestinationTwo from "./Destination/DestinationTwo";
import ElementSection from "./Elements/ElementSection";
import ScrollToTop from "./ScrollToTop";

const Index = () => {
  return (
    <div>
      <ScrollToTop />
      <BannerTwo />
      <DestinationTwo />
      <CategoryOne />
      {/* <OfferOne /> */}
      {/* <PopularDestination /> */}
      {/* <CounterTwo /> */}
      {/* <GalleryTwo /> */}
      {/* <TourGuide /> */}
      {/* <TestimonialTwo /> */}
      <BrandOne className="space-bottom" />
      {/* <BlogTwo /> */}
      <ElementSection className="bg-smoke" />
    </div>
  );
};

export default Index;
