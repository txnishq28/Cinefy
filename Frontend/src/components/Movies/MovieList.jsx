import React from "react";
import MovieCard from "./MovieCard";
import { languages, allMovies } from "../../utils/constants.js";

const MoviesList = () => {
  return (
    <div className="w-full md:w-3/4 p-4">
      {/* Languages */}
      <div className="flex flex-wrap gap-2 mb-6">
        {languages.map((lang, i) => (
          <span
            key={i}
            className=" bg-[#120a24]/80 backdrop-blur border border-purple-700/30 border-4 text-[#aa42f0] py-1 px-3 rounded-[24px] text-sm cursor-pointer hover:bg-gray-900"
          >
            {lang}
          </span>
        ))}
      </div>

      {/* Coming Soon Header */}
      <div className="flex justify-between items-center rounded-2xl bg-[#120a24]/80 backdrop-blur border border-purple-700/30 p-6 shadow-lg mb-6">
        <h3 className="font-semibold text-xl text-amber-50">Coming Soon</h3>
        <a
          href="#"
          className="text-[#aa42f0] text-sm font-medium flex items-center"
        >
          Explore Upcoming Movies <span className="ml-1">{">"}</span>
        </a>
      </div>

      {/* Movie Cards */}
      <div className="flex flex-wrap gap-6">
        {allMovies.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
