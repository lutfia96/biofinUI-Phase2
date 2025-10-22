import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import TourDetailsMain from '../Components/Tour/TourDetailsMain'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'

function AboutFees() {
    return (
        <>
            <HeaderOne />
            {/* <Breadcrumb
                title="About Fees"
            /> */}
            <TourDetailsMain />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default AboutFees