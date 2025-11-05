import { useParams } from "react-router-dom";
import ResortDetailsMain from "../Components/Resort/ResortDetailsMain";
import ScrollToTop from "../Components/ScrollToTop";
import { getSiteBySlugName } from "../hooks/query/websiteQuery";

function ResortDetails() {
  const param = useParams();
  const { data } = getSiteBySlugName(param.id!);
  return (
    <>
      {data && <ResortDetailsMain {...data} />}
      <ScrollToTop />
    </>
  );
}

export default ResortDetails;
