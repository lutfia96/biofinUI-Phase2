import { useState } from "react";
import { Link } from "react-router-dom";
import DestinationCard from "./DestinationCard";
import { getSiteAttractionByEntityQuery } from "../../hooks/query/websiteQuery";
import DestinationCardTwo from "./DestinationCardTwo";

function DestinationInner({ entity }: { entity: string }) {
  const [activeTab, setActiveTab] = useState("tab-grid");

  const { data } = getSiteAttractionByEntityQuery(entity);
  return (
    <section className="space">
      <div className="container">
        <div className="th-sort-bar">
          <div className="row justify-content-between align-items-center">
            {/* <div className="col-md-4">
                            <div className="search-form-area">
                                <form className="search-form">
                                    <input type="text" placeholder="Search" />
                                    <button type="submit">
                                        <i className="fa-light fa-magnifying-glass" />
                                    </button>
                                </form>
                            </div>
                        </div> */}
            <div className="col-md-auto">
              <div className="sorting-filter-wrap">
                <div className="nav" role="tablist">
                  <Link
                    to="#"
                    id="tab-destination-grid"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-grid"
                    role="tab"
                    aria-controls="tab-grid"
                    aria-selected="true"
                    className={`${activeTab === "tab-grid" ? "active" : ""}`}
                    type="button"
                    onClick={() => setActiveTab("tab-grid")}
                  >
                    <i className="fa-light fa-grid-2" />
                  </Link>
                  <Link
                    to="#"
                    id="tab-destination-list"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-list"
                    role="tab"
                    aria-controls="tab-list"
                    aria-selected="false"
                    className={`${activeTab === "tab-list" ? "active" : ""}`}
                    onClick={() => setActiveTab("tab-list")}
                  >
                    <i className="fa-solid fa-list" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12 col-lg-12">
            <div className="tab-content" id="nav-tabContent">
              <div
                className={`tab-pane fade ${
                  activeTab === "tab-grid" ? "show active" : ""
                }`}
                id="tab-grid"
                role="tabpanel"
              >
                <div className="row gy-30">
                  {data?.map((data, index) => (
                    <div key={index} className="col-xxl-4 col-xl-12">
                      <DestinationCard
                        destinationID={data.slug}
                        destinationImage={`${data.featured_image}`}
                        destinationTitle={data.title}
                        destinationPrice={data.address}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === "tab-list" ? "show active" : ""
                }`}
                id="tab-list"
                role="tabpanel"
              >
                <div className="row gy-30">
                  {data?.map((data, index) => (
                    <div key={index} className="col-12">
                      <DestinationCardTwo
                        destinationID={data.slug}
                        destinationImage={`${data.featured_image}`}
                        destinationTitle={data.title}
                        destinationPrice={data.location}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DestinationInner;
