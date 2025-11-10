import { useParams } from "react-router-dom";
import ResortDetailsMain from "../Components/Resort/ResortDetailsMain";
import { getSiteBySlugName } from "../hooks/query/websiteQuery";
import { Loader } from "../Components/Loader";

function ResortDetails() {
  const param = useParams();
  const { data, isFetching } = getSiteBySlugName(param.id!);
  return (
    <>
      {isFetching && <Loader />}
      {data && <ResortDetailsMain {...data} />}
    </>
  );
}

export default ResortDetails;
