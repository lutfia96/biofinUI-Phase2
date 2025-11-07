import { useParams } from "react-router-dom";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import DestinationInner from "../Components/Destination/DestinationInner";
import { useEffect, useState } from "react";

function Destination() {
  const { entity } = useParams();
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (entity === "marine") {
      setTitle("Marine Conservation Area");
    } else if (entity === "forest") {
      setTitle("Forest Protected Area");
    } else {
      setTitle("Heritage");
    }
  }, []);
  return (
    <>
      <Breadcrumb title={title} video={entity} />
      <DestinationInner entity={entity!} />
    </>
  );
}

export default Destination;
