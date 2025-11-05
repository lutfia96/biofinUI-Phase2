import { Link } from "react-router-dom";
interface BreadCrumbProps {
  title?: string;
  description?: string;
  bgImage?: string;
}
function Breadcrumb({ title, bgImage }: BreadCrumbProps) {
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
