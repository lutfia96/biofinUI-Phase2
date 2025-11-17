import { Link } from "react-router-dom";

interface DestinationCardProps {
  destinationID: string;
  destinationImage: string;
  destinationTitle: string;
  destinationPrice: string;
  destinationContent: string;
}
function DestinationCard({ ...props }: DestinationCardProps) {
  const {
    destinationID,
    destinationImage,
    destinationTitle,
    destinationPrice,
    destinationContent,
  } = props;
  return (
    <>
      <div
        className="tour-box th-ani bg-white shadow"
        style={{ height: "35rem" }}
      >
        <div className="tour-box_img global-img">
          <img
            src={destinationImage}
            alt=""
            style={{ width: "100%", height: "16rem" }}
          />
        </div>
        <div className="tour-content">
          <h3 className="box-title font-extrabold">
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
              {destinationPrice.substring(0, 50)}
            </span>
          </div>
          <div className="tour-action">
            <span>
              <i className="fa-light fa-clock" />7 Days
            </span>
            <Link
              to={`/site/${destinationID}`}
              className="th-btn style7 th-icon"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default DestinationCard;
