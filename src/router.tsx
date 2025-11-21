import { createBrowserRouter } from "react-router-dom";
import HomeTwo from "./Pages/HomeTwo";
import About from "./Pages/About";
import Destination from "./Pages/Destination";
import AboutFees from "./Pages/AboutFees";
import ServiceDetails from "./Pages/ServiceDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import ResortDetails from "./Pages/ResortDetails";
import Faq from "./Pages/Faq";
import Error from "./Pages/Error";
import Contact from "./Pages/Contact";
import Index from "./Components/Index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeTwo />,
    children: [
      { path: "/", element: <Index /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/attraction/:entity",
        element: <Destination />,
      },
      {
        path: "/site/:id",
        element: <ResortDetails />,
      },
      {
        path: "/forest/:id",
        element: <ResortDetails />,
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
        path: "/service/:id",
        element: <ServiceDetails />,
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
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/error",
        element: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
