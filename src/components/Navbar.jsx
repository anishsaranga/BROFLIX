import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
// routing stuff
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useWindowSize } from "@react-hook/window-size";

function Navbar() {
  //  store route path
  const [searchTerm, setSearchTerm] = useState("");
  // useHistory to route based on enter event
  // useHIstory is now useNavigate
  const navigate = useNavigate();

  const routeToSearch = () => {
    searchTerm && navigate("search/" + searchTerm);
  };

  const [width] = useWindowSize();
  console.log(width);
  return (
    <>
      <div className="shadow-lg bg-slate-950 sticky top-0 left-0 flex flex-nowrap justify-items-center items-center z-[100] w-full h-full">
        {/* Logo */}
        <Link to="/broflix/">
          <img
            src="./assets/broflix.png"
            className="h-12 p-1 mx-2 my-2 bg-slate-950 hover:cursor-pointer"
            alt="<Broflix Logo here>"
          />
        </Link>
        {/* Movies and TV shows buttons */}
        <Link
          to="/broflix/movies"
          button="true"
          className="text-white hover:text-red-600 duration-150 ml-5 mr-3 hidden md:block"
        >
          Movies
        </Link>
        <Link
          to="/broflix/tv"
          button="true"
          className="text-white hover:text-red-600 duration-150 m-3 hidden md:block"
        >
          TV shows
        </Link>

        {/* Search bar + dark/light mode toggle */}
        <span className="ml-auto mr-8 flex flex-row items-center">
          <input
            type="text"
            className="bg-gray-500 rounded-full focus:outline-red-700 focus:border-red-700 focus:border-4 h-10 text-stone-50 p-3 m-3"
            // onchange setting the current value in search field to the searchTerm var
            onChange={(e) => setSearchTerm(e.target.value)}
            // if enter key is pressed route based on useHistory
            onKeyDown={(e) => {
              if (e.key === "Enter" && searchTerm != "") {
                routeToSearch();
              }
            }}
            size={width <= 768 ? 15 : 45}
          />

          <IoSearchOutline
            button="true"
            size={32}
            color="white"
            className="hover:cursor-pointer"
            onClick={routeToSearch}
          />
          {/* menu for small screens */}
          <div className="ml-5 hover:cursor-pointer md:hidden">
            <RxHamburgerMenu color="white" size={30} button="true" />
          </div>
        </span>
      </div>
    </>
  );
}

export default Navbar;
