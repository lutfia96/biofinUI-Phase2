import { useParams } from "react-router-dom";
import ResortDetailsMain from "../Components/Resort/ResortDetailsMain";
import { getSiteBySlugName } from "../hooks/query/websiteQuery";

function ResortDetails() {
  const param = useParams();
  const { data } = getSiteBySlugName(param.id!);
  return <>{data && <ResortDetailsMain {...data} />}</>;
}

export default ResortDetails;
