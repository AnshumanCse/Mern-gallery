import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div>
      <nav className="px-2 w-full bg-black h-[8vh] flex justify-evenly items-center ">
        <Link to="/" className="text-white font-bold text-2xl">
          My Gallery
        </Link>
        <button className="hidden" type="button">
          <span></span>
        </button>
        <div className="">
          <ul className="">
            <Link
              to="/add-image"
              className="w-[30px] rounded-md bg-blue-500 mr-8"
            >
              <button className="text-white px-8 font-bold animate-pulse">
                Add Image
              </button>
            </Link>
            <Link to="/add-category">
              <button className="text-white font-bold hover:text-blue-900">
                Add category
              </button>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
    </>
  );
};

export default Header;
