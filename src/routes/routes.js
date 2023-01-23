import Specialities from "../components/Specialities/Specialities";
import Hospitals from "../components/Hospitals/Hospitals";
import Ambulence from "../components/Ambulence/Ambulence";
import Hospitals from '../components/Hospitals/Hospitals';
import Ambulence from '../components/Ambulence/Ambulence'
import Main from "../Layouts/main/Main";
import Home from "../pages/main/Home";
import Contactus from "../components/ContactUs/Contactus";

const { createBrowserRouter } = require("react-router-dom");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Specialities",
        element: <Specialities />,
      },
      {
        path: "Hospitals",
        element: <Hospitals />,
      },
      {
        path: "Ambulence",
        element: <Ambulence />,
      },
      {
        path: "Contact-us",
        element: <Contactus />,
      },
    ],
  },
]);

export default routes;
