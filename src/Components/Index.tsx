import BannerTwo from "./Banner/BannerTwo";
import BrandOne from "./Brand/BrandOne";
import CategoryOne from "./Category/CategoryOne";
import DestinationTwo from "./Destination/DestinationTwo";
import ScrollToTop from "./ScrollToTop";

const Index = () => {
  return (
    <div style={{ backgroundColor: "#f8fafc" }}>
      <ScrollToTop />
      <BannerTwo />
      <DestinationTwo />
      <CategoryOne />
      <BrandOne className="space-bottom" />
    </div>
  );
};

export default Index;
