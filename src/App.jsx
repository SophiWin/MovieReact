import React from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="px-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
