import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import searchIcon from "../assets/search.svg";

export default function Navbar() {
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    navigate(`/search/${searchKey}`);
    setSearchKey("");
  };
  return (
    <div className="sticky top-0 left-0 ">
      <nav className="md:flex md:justify-between md:items-center  mx-auto text-white bg-black px-2 md:px-14 py-4  ">
        <p className="text-xl">
          <span className="text-red-500 font-extrabold text-xl">M</span>Theatre
        </p>
        <div className="border-b-2 border-red-300 md:border-none my-3"></div>
        <ul className="md:flex md:justify-center md:items-center gap-3  ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/popular">Popular</NavLink>
          </li>
          <li>
            <NavLink to="/upcoming">Upcoming</NavLink>
          </li>
        </ul>
        <div>
          <form
            className="flex items-center justify-center gap-3 mt-4"
            onSubmit={search}
          >
            <button type="submit">
              <img className="w-6 h-6 cursor-pointer" src={searchIcon} />
            </button>
            <input
              type="text"
              value={searchKey}
              onChange={(e) => {
                setSearchKey(e.target.value);
              }}
              className="text-2xl bg-transparent border-b border-slate-300 focus:outline-none focus:border-red-500"
            />
          </form>
        </div>
      </nav>
    </div>
  );
}
