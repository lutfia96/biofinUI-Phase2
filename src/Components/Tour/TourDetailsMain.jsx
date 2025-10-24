import React, { useState } from "react";
import "./DetailsMain.css"

function TourDetailsMain() {
    const [activeTab, setActiveTab] = useState("day-tab1");

    const days = [
        { id: "day-tab1", label: "Day 01" },
        { id: "day-tab2", label: "Day 02" },
        { id: "day-tab3", label: "Day 03" },
        { id: "day-tab4", label: "Day 04" },
        { id: "day-tab5", label: "Day 05" },
        { id: "day-tab6", label: "Day 06" },
        { id: "day-tab7", label: "Day 07" },
    ];

    const tabContent = {
        "day-tab1": [
            "As the Eiffel Tower is to Paris, the silhouette of the",
            "Curabitur pellentesque nibh nibh, at maximus ante",
            "United commitment to our excellence patent protection.",
        ],
        "day-tab2": ["Lorem ipsum dolor sit amet.", "Sed ut perspiciatis unde omnis iste."],
        "day-tab3": ["Fusce sed arcu nec arcu elementum.", "Nullam non libero ut lacus varius."],
        "day-tab4": ["Duis et risus eget urna tincidunt.", "Vestibulum auctor orci at felis ultricies."],
        "day-tab5": ["Sed cursus turpis vel nulla egestas.", "Morbi vulputate mi nec neque posuere."],
        "day-tab6": ["Vestibulum eget turpis sed orci bibendum.", "Mauris non dolor sit amet lectus."],
        "day-tab7": ["Ut quis sapien nec felis consequat.", "Praesent aliquet metus ac nisi dapibus."],
    };

    return (
        <section className="tour-details-section">
            <div className="container-fluid px-0">
                <div className="text-center py-5 title-section">
                    <span className="sub-title">About Entrance Fees</span>
                    <h2 className="main-title pt-5">
                        Learn how your entrance fees support conservation, communities, and sustainable tourism in Zanzibar
                    </h2>
                </div>

                <div className="page-content d-flex flex-column align-items-center">
                    {/* Card 1 */}
                    <div className="card custom-card w-100">
                        <div className="card-body p-4">
                            <h2 className="box-title text-start mb-3">
                                Explore the Beauty of Maldives and Enjoy
                            </h2>
                            <h4 className="tour-price text-start mb-4">
                                <span className="currency">$189.25</span> <span className="small text-light">/Person</span>
                            </h4>
                            <p className="box-text mb-3 text-start">
                                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo. Dolorem ipsum quia dolor sit
                                amet, consectetur, adipisci velit, sed quia non numquam eius modi
                                tempora incidunt ut labore et dolore magnam aliquam quaerat
                                voluptatem. Quis autem vel eum iure reprehenderit qui in ea
                                voluptate velit esse quam nihil molestiae consequatur, vel illum
                                qui dolorem eum fugiat quo voluptas nulla pariatur
                            </p>
                            <p className="box-text mb-0 text-start">
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                                ex ea commodi consequatur?
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card custom-card w-100">
                        <div className="card-body p-4">
                            <h2 className="box-title mb-3 text-start">Highlights</h2>
                            <ul className="checklist">
                                <li>Visit most popular locations of Maldives</li>
                                <li>Buffet Breakfast for all travelers with top quality</li>
                                <li>Expert guides provide valuable insights</li>
                                <li>Best hotels and great food included</li>
                            </ul>
                        </div>
                    </div>

                    {/* Entrance Fee Info Card */}
                    <div className="card custom-card w-100">
                        <div className="card-body p-4">
                            {/* Heading Row */}
                            <div className="row mb-4">
                                <div className="col-12 d-flex align-items-center">
                                    <div className="icon-box me-3">
                                        <i className="bi bi-eye"></i>
                                    </div>
                                    <h4 className="mb-0 fw-bold">Where Your Entrance Fee Goes</h4>
                                </div>
                            </div>

                            {/* Two boxes row */}
                            <div className="row g-3 mb-4">
                                <div className="col-md-6">
                                    <div className="section-box gov-box h-100">
                                        <h5 className="fw-bold high-light-gov mb-3">
                                            <i className="bi bi-globe me-2"></i>70% Government Programs
                                        </h5>
                                        <ul className="mb-0">
                                            <li>National conservation programs</li>
                                            <li>Park maintenance and infrastructure</li>
                                            <li>Environmental monitoring and enforcement</li>
                                            <li>Research and scientific studies</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="section-box com-box h-100">
                                        <h5 className="fw-bold high-light-com mb-3">
                                            <i className="bi bi-people me-2"></i>30% Local Communities
                                        </h5>
                                        <ul className="mb-0">
                                            <li>Community development projects</li>
                                            <li>Education and skills training</li>
                                            <li>Alternative livelihood programs</li>
                                            <li>Local infrastructure improvements</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Row */}
                            <div className="row">
                                <div className="col-12">
                                    <div className="footer-box section-box">
                                        <p className="mb-0 text-secondary px-3 py-3">
                                            This distribution ensures a balanced approach where nature
                                            conservation and community development work hand in hand.
                                            Government programs focus on large-scale conservation efforts and
                                            infrastructure, while community investments create sustainable
                                            livelihoods and ensure local support for conservation initiatives.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid px-0 d-flex justify-content-center mb-5">
                        <div className="row g-4 col-11 col-lg-10">
                            {/* Marine Conservation */}
                            <div className="col-md-6">
                                <div className="conservation-card p-4 h-100 border rounded shadow-sm">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="icon-bg me-3">
                                            <i className="bi bi-water fs-3 text-info"></i>
                                        </div>
                                        <h5 className="fw-bold mb-0 d-flex align-items-center">
                                            <i className="bi bi-tsunami text-info me-2 fs-4"></i> Marine Conservation
                                        </h5>
                                    </div>

                                    <div className="content-item mb-3 border-start border-4 border-info ps-3">
                                        <h6 className="fw-bold text-info mb-1">Marine Enforcement</h6>
                                        <p className="text-secondary mb-0">
                                            Preventing illegal fishing and destructive activities that threaten coral reefs and marine life
                                        </p>
                                    </div>

                                    <div className="content-item mb-3 border-start border-4 border-primary ps-3">
                                        <h6 className="fw-bold text-primary mb-1">Scientific Research and Monitoring</h6>
                                        <p className="text-secondary mb-0">
                                            Tracking reef health, marine species populations, and ecosystem changes
                                        </p>
                                    </div>

                                    <div className="content-item border-start border-4 border-teal ps-3">
                                        <h6 className="fw-bold text-teal mb-1">Education and Capacity Building</h6>
                                        <p className="text-secondary mb-0">
                                            Training local communities and raising awareness about marine conservation
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Forest Protection */}
                            <div className="col-md-6">
                                <div className="conservation-card p-4 h-100 border rounded shadow-sm">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="icon-bg-green me-3">
                                            <i className="bi bi-tree fs-3 text-success"></i>
                                        </div>
                                        <h5 className="fw-bold mb-0 d-flex align-items-center">
                                            <i className="bi bi-tree-fill text-success me-2 fs-4"></i> Forest Protection
                                        </h5>
                                    </div>

                                    <div className="content-item mb-3 border-start border-4 border-success ps-3">
                                        <h6 className="fw-bold text-success mb-1">Community Development</h6>
                                        <p className="text-secondary mb-0">
                                            Supporting alternative livelihoods and skills training for forest-adjacent communities
                                        </p>
                                    </div>

                                    <div className="content-item mb-3 border-start border-4 border-teal ps-3">
                                        <h6 className="fw-bold text-teal mb-1">Forest Monitoring</h6>
                                        <p className="text-secondary mb-0">
                                            Preventing illegal logging and preserving biodiversity through active surveillance
                                        </p>
                                    </div>

                                    <div className="content-item border-start border-4 border-warning ps-3">
                                        <h6 className="fw-bold text-warning mb-1">Eco-Tourism Support</h6>
                                        <p className="text-secondary mb-0">
                                            Creating sustainable tourism opportunities that benefit both nature and communities
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card custom-card w-100">
                        <div className="col-6">
                            <div className="card-body p-4">
                                <h2 className="box-title mb-3 text-start">Basic Information</h2>
                                <div className="row text-start">
                                    <div className="col-md-6">
                                        <ul className="list-unstyled">
                                            <li>Destination</li>
                                            <li>Departure</li>
                                            <li>Language</li>
                                            <li>Return Date</li>
                                            <li>Departure Date</li>
                                            <li>No. of Guide</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-unstyled fw-semibold">
                                            <li>Netherlands</li>
                                            <li>Singapore Airport, Singapore</li>
                                            <li>English</li>
                                            <li>August 12, 2024</li>
                                            <li>Netherlands</li>
                                            <li>2 Guides</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 5 - Tour Plan */}
                    <div className="card custom-card w-100">
                        <div className="card-body p-4">
                            <h3 className="page-title text-start mb-4">Tour Plan</h3>
                            <ul className="nav nav-tabs justify-content-start mb-3" role="tablist">
                                {days.map((day) => (
                                    <li className="nav-item" key={day.id}>
                                        <button
                                            className={`nav-link ${activeTab === day.id ? "active" : ""}`}
                                            onClick={() => setActiveTab(day.id)}
                                            type="button"
                                        >
                                            {day.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="tab-content">
                                {days.map((day) => (
                                    <div
                                        key={day.id}
                                        className={`tab-pane fade ${activeTab === day.id ? "show active" : ""}`}
                                        id={day.id}
                                    >
                                        <ul className="checklist text-start px-3">
                                            {tabContent[day.id].map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="card custom-card bg-smoke2 text-center p-4 my-4 pb-5 mb-5">
                        <div className="icon mb-3 fs-1">🤍</div>
                        <h4 className="fw-bold mb-3 text-dark">Thank You for Supporting Conservation</h4>
                        <p className="text-secondary mb-0">
                            Your visit and entrance fee contribute directly to preserving Zanzibar’s natural beauty
                            and supporting local communities. Together, we’re ensuring these treasures remain
                            protected for generations to come.
                        </p>
                    </div>


                    {/* Card 6 - Map */}
                    {/*<div className="card custom-card w-100">*/}
                    {/*    <div className="card-body p-4">*/}
                    {/*        <h3 className="page-title text-start mb-3">Location</h3>*/}
                    {/*        <div className="contact-map">*/}
                    {/*            <iframe*/}
                    {/*                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"*/}
                    {/*                allowFullScreen*/}
                    {/*                loading="lazy"*/}
                    {/*                style={{ width: "100%", height: "400px", border: 0, borderRadius: "8px" }}*/}
                    {/*                title="Google Map"*/}
                    {/*            ></iframe>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    );
}

export default TourDetailsMain;
