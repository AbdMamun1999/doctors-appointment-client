import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import '../../css/main.css'
const Main = () => {
  return (
    <div>
        <Navbar />
        <main className="main-container">
          <Outlet />
        </main>
        <Footer />
    </div>
  );
};

export default Main;
