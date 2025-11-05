import { useParams } from "react-router-dom";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import ResortDetailsMain from "../Components/Resort/ResortDetailsMain";
import ScrollToTop from "../Components/ScrollToTop";
import { getSiteBySlugName } from "../hooks/query/websiteQuery";

function ResortDetails() {
  const param = useParams();
  const { data } = getSiteBySlugName(param.id!);
  return (
    <>
      <Breadcrumb title="Resort Details" />
      {data && <ResortDetailsMain {...data} />}
      <ScrollToTop />
    </>
  );
}

export default ResortDetails;
