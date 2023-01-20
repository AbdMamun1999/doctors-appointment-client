import Main from "../Layouts/main/Main";
import Home from "../pages/main/Home";

const { createBrowserRouter } = require("react-router-dom");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path:"/",
        element:<Home/>
      }
    ]
  },

]);

export default routes;
