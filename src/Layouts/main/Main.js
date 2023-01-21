import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import '../../css/main.css'
const Main = () => {
  return (
    <div>
      <Navbar />
        <main className="main-container">
          <Outlet />
        </main>
    </div>
  );
};

export default Main;
