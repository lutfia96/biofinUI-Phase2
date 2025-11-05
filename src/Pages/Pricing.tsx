import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import PricingPlan from "../Components/Services/PricingPlan";
import Cta from "../Components/Services/Cta";
import FaqInnerTwo from "../Components/Faq/FaqInnerTwo";

function Pricing() {
  return (
    <div>
      <Breadcrumb title="Pricing Plan" />
      <PricingPlan className="space" />
      <Cta />
      <FaqInnerTwo />
    </div>
  );
}

export default Pricing;
