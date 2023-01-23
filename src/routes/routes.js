import Main from "../Layouts/main/Main";
import Home from "../pages/main/Home";
import Login from "../pages/main/Login";

const { createBrowserRouter } = require("react-router-dom");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/login",
        element:<Login/>
      }
    ]
  },

]);

export default routes;
