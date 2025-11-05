import { createBrowserRouter } from "react-router-dom";
import HomeTwo from "./Pages/HomeTwo";
import About from "./Pages/About";
import Destination from "./Pages/Destination";
import Forest from "./Pages/Forest";
import Heritage from "./Pages/Heritage";
import AboutFees from "./Pages/AboutFees";
import ServiceDetails from "./Pages/ServiceDetails";
import Service from "./Pages/Service";
import Activities from "./Pages/Activities";
import ActivitiesDetails from "./Pages/ActivitiesDetails";
import Shop from "./Pages/Shop";
import ShopDetails from "./Pages/ShopDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Wishlist from "./Pages/Wishlist";
import Gallery from "./Pages/Gallery";
import Tour from "./Pages/Tour";
import TourDetails from "./Pages/TourDetails";
import Resort from "./Pages/Resort";
import ResortDetails from "./Pages/ResortDetails";
import TourGuide from "./Pages/TourGuide";
import TourGuiderDetails from "./Pages/TourGuiderDetails";
import Faq from "./Pages/Faq";
import Pricing from "./Pages/Pricing";
import Error from "./Pages/Error";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import Contact from "./Pages/Contact";
import Index from "./Components/Index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeTwo />,
    // {
    //   path: "/home-agency",
    //   element: <HomeThree />,
    // },
    // {
    //   path: "/home-yacht",
    //   element: <HomeFour />,
    // },
    children: [
      { path: "/", element: <Index /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/marine",
        element: <Destination />,
      },
      {
        path: "/marine/:id",
        element: <ResortDetails />,
      },
      {
        path: "/forest",
        element: <Forest />,
      },
      {
        path: "/forest/:id",
        element: <ResortDetails />,
      },
      {
        path: "/heritage",
        element: <Heritage />,
      },
      {
        path: "/heritage/:id",
        element: <ResortDetails />,
      },
      {
        path: "/about-fees",
        element: <AboutFees />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/service/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/activities",
        element: <Activities />,
      },
      {
        path: "/activities-details",
        element: <ActivitiesDetails />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:id",
        element: <ShopDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/tour",
        element: <Tour />,
      },
      {
        path: "/tour-details",
        element: <TourDetails />,
      },
      {
        path: "/resort",
        element: <Resort />,
      },
      {
        path: "/resort/:id",
        element: <ResortDetails />,
      },
      {
        path: "/tour-guide",
        element: <TourGuide />,
      },
      {
        path: "/tour-guide/:id",
        element: <TourGuiderDetails />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/price",
        element: <Pricing />,
      },
      {
        path: "/error",
        element: <Error />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
