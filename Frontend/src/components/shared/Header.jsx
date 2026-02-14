import React from "react";
import mainLogo from "../../assets/cinefy_white.png";
import { FaSearch } from "react-icons/fa";
import useLocation from "../../context/useLocation";
import map from "../../assets/pin.gif";

const Header = () => {
  const { location, loading, error } = useLocation();

  return (
    <div className="w-full text-sm bg-[#0b0714] border-b border-purple-900/40">
      {/* Top Navbar */}
      <div className="px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4">
          {/* Left Navbar */}
          <div className="flex items-center space-x-4">
            <img
              src={mainLogo}
              alt="logo"
              className="h-10 object-contain cursor-pointer drop-shadow"
            />

            <div className="relative">
              <input
                type="text"
                placeholder="Search for Movies, Events, Concerts, Sports and Activities"
                className="bg-[#120a24] border border-purple-800/40 rounded-lg px-4 py-2 w-[420px] text-sm outline-none text-gray-300 placeholder-gray-500 focus:border-purple-500 transition"
              />
              <FaSearch className="absolute right-3 top-2.5 text-gray-400" />
            </div>
          </div>

          {/* Right Navbar */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-300 cursor-pointer hover:text-white transition">
              {loading && (
                <img src={map} alt="loading..." className="w-6 h-6" />
              )}
              {location && (
                <span className="flex items-center gap-1">
                  {location} <span className="text-purple-400">▼</span>
                </span>
              )}
            </div>

            <button className="bg-purple-700 hover:bg-purple-600 transition text-white font-semibold px-4 py-2 rounded-lg text-sm shadow-md shadow-purple-900/30">
              Sign in
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="bg-[#120a24] px-4 md:px-8 text-gray-300 border-t border-purple-900/40">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-2">
          <div className="flex items-center space-x-6 font-medium">
            {["Movies", "Stream", "Events", "Plays", "Sports", "Activities"].map(
              (item) => (
                <span
                  key={item}
                  className="cursor-pointer hover:text-purple-400 transition"
                >
                  {item}
                </span>
              )
            )}
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-400">
            {["ListYourShow", "Corporates", "Offers", "Gift Cards"].map(
              (item) => (
                <span
                  key={item}
                  className="cursor-pointer hover:text-white transition"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;