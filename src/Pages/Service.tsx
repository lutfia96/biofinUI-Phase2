import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import ServiceInner from "../Components/Services/ServiceInner";
import TourTwo from "../Components/Tour/TourTwo";
import PricingPlan from "../Components/Services/PricingPlan";

function Service() {
  return (
    <div>
      <Breadcrumb title="Services" />
      <ServiceInner />
      <TourTwo />
      <PricingPlan className="space-bottom" />
    </div>
  );
}

export default Service;
