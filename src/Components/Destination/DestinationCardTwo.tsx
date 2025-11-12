import { Link } from "react-router-dom";

interface DestinationCardProps {
  destinationID: string;
  destinationImage: string;
  destinationTitle: string;
  destinationPrice: string;
  destinationContent: string;
}
function DestinationCardTwo({ ...props }: DestinationCardProps) {
  const {
    destinationID,
    destinationImage,
    destinationTitle,
    destinationPrice,
  } = props;
  return (
    <div className="tour-box style-flex th-ani">
      <div className="tour-box_img global-img">
        <img src={destinationImage} alt="" />
      </div>
      <div className="tour-content">
        <h3 className="box-title">
          <Link to={`/site/${destinationID}`}>{destinationTitle}</Link>
        </h3>
        <div className="tour-rating">
          <div
            className="star-rating"
            role="img"
            aria-label="Rated 5.00 out of 5"
          >
            <span style={{ width: "100%" }}>
              Rated
              <strong className="rating">5.00</strong> out of 5 based on{" "}
              <span className="rating">4.8</span>(4.8 Rating)
            </span>
          </div>
          <Link
            to={`/site/${destinationID}`}
            className="woocommerce-review-link"
          >
            (<span className="count">4.8</span>
            Rating)
          </Link>
        </div>
        <h4 className="tour-box_price">
          <span className="currency">
            {destinationPrice ? destinationPrice : "00.00"}
          </span>
          /Person
        </h4>
        <p>{props.destinationContent}</p>
        <div className="tour-action">
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
