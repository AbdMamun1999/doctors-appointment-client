import Specialities from "../components/Specialities/Specialities";
import Hospitals from "../components/Hospitals/Hospitals";
import Ambulence from "../components/Ambulence/Ambulence";
import Main from "../Layouts/main/Main";
import Home from "../pages/main/Home";
import Contactus from "../components/ContactUs/Contactus";
import Login from "../pages/main/Login";
import Signup from "../pages/main/Signup";
import GetStarted from "../pages/main/GetStarted";
import Dashboard from "../Layouts/dashboard/Dashboard";
import AddDoctor from "../pages/dashboard/AddDoctor";
import DoctorList from "../pages/dashboard/DoctorList";
import PatientList from "../pages/dashboard/Patient/PatientList";
import Appointment from "../pages/dashboard/Patient/Appointment";
import MyAppointment from "../pages/dashboard/MyAppointments";

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
      { path: "login", element: <Login /> },
      { path: "register", element: <Signup /> },
      { path: "get-started", element: <GetStarted /> },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "add-doctor",
        element: <AddDoctor />,
      },
      {
        path: "doctorlist",
        element: <DoctorList />,
      },
      {
        path: "patientlist",
        element: <PatientList />,
      },
      {
        path: "appointment-for-patient",
        element: <MyAppointment />,
      },
      {
        path: "appointment-for-doctor",
        element: <Appointment />,
      },
    ],
  },
]);

export default routes;
