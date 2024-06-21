import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" fixed bottom-0 w-full ">
      <div className=" flex justify-evenly items-center py-4 bg-red-700 text-white font-semibold text-lg ">
        <Link to="/">
          <div className="hover:scale-105">Home</div>
        </Link>

        <Link to="/popular">
          <div className="hover:scale-105">Popular</div>
        </Link>
        <Link to="/upcoming">
          <div className="hover:scale-105">Upcoming</div>
        </Link>
        <Link to="/signIn">
          <div className="hover:scale-105">Sign In</div>
        </Link>
      </div>
    </div>
  );
}
