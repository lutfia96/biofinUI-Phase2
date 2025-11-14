import { Link } from "react-router-dom";

interface DestinationCardProps {
  destinationID: string;
  destinationImage: string;
  destinationTitle: string;
  destinationAddress: string;
  destinationContent: string;
}
function DestinationCardTwo({ ...props }: DestinationCardProps) {
  const {
    destinationID,
    destinationImage,
    destinationTitle,
    destinationAddress,
    destinationContent,
  } = props;
  return (
    <div className="row shadow h-60 rounded-3xl">
      <div
        className="col-sm-12 col-md-4 rounded-l-3xl"
        style={{
          backgroundImage: `url(${destinationImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "200px",
        }}
      ></div>
      <div className="tour-content p-2 col-sm-12 col-md-7">
        <h3 className="box-title">
          <Link to={`/site/${destinationID}`}>{destinationTitle}</Link>
        </h3>
        <div className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          <span className="">
            {destinationContent
              ? destinationContent.length > 50
                ? destinationContent.substring(0, 100) + "..."
                : destinationContent
              : ""}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-500 mb-6">
          <span className="w-4 h-4 fa fa-map-marker" />
          <span className="text-sm font-medium">
            {destinationAddress.substring(0, 50)}
          </span>
        </div>
        <div className="tour-action space-x-3">
          <span>
            <i className="fa-light fa-clock" />7 Days
          </span>
          <Link to={`/site/${destinationID}`} className="th-btn style4 th-icon">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DestinationCardTwo;
