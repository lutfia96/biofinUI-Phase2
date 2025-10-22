import React from 'react'
import HeaderOne from '../Components/Header/HeaderOne'
import Breadcrumb from '../Components/BreadCrumb/Breadcrumb'
import DestinationInner from '../Components/Destination/DestinationInner'
import FooterFour from '../Components/Footer/FooterFour'
import ScrollToTop from '../Components/ScrollToTop'

function Forest() {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                title="Forest attaractions"
            />
            <DestinationInner />
            <FooterFour />
            <ScrollToTop />
        </>
    )
}

export default Forest
