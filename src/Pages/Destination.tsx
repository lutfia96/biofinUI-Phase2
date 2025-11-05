import { useLocation } from "react-router-dom";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import DestinationInner from "../Components/Destination/DestinationInner";

function Destination() {
  const location = useLocation().pathname.replace("/", "");
  return (
    <>
      <Breadcrumb title="Marine attaractions" video={location} />
      <DestinationInner entity={location} />
    </>
  );
}

export default Destination;
