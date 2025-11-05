import { Link } from "react-router-dom";
interface BreadCrumbProps {
  title?: string;
  description?: string;
  bgImage?: string;
  video?: string;
}
function Breadcrumb({ title, bgImage, video }: BreadCrumbProps) {
  const getBackgroundVideo = () => {
    return video === "marine"
      ? "/assets/video/marinevideo.mp4"
      : "/assets/video/forestvideo.mp4";
  };

  return (
    <>
      <div
        className="breadcumb-wrapper "
        style={{
          backgroundImage: `url(${
            bgImage || "/assets/img/bg/breadcumb-bg.jpg"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <video
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: "0",
            minHeight: "50vh",
            objectFit: "cover",
            inset: "0",
          }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={getBackgroundVideo()} type="video/mp4" />
        </video>
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">{title}</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>{title}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb;
