import React from "react";

const MovieFilters = ({ languages = [] }) => {
  return (
    <div className="w-full md:w-1/4 p-4 space-y-6">
      
      <h2 className="text-2xl font-semibold text-amber-50">Filters</h2>

      {/* Language */}
      <div className=" bg-gray-800 p-4 rounded-md shadow-sm">
        
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-amber-50">Languages</span>
          <button className="text-[#aa42f0] text-sm">Clear</button>
        </div>

        <div className="flex flex-wrap gap-2">
          {
            languages.map((lang, i) => (
            <span
              key={i}
              className="border border-[#aa42f0]  text-[#aa42f0] px-3 py-1 text-sm rounded hover:bg-gray-900 cursor-pointer"
            >
              {lang}
            </span>
          ))
          }
        </div>
      </div>

      {/* Similar blocks for genres and format */}
      <div className="bg-gray-800 -mt-3 p-4 rounded">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-white">Genres</span>
          <button className="text-[#aa42f0] text-sm">Clear</button>
        </div>
      </div>

      <div className="bg-gray-800 -mt-3 p-4 rounded">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-white">Format</span>
          <button className="text-[#aa42f0] text-sm">Clear</button>
        </div>
      </div>

      <button className="w-full border border-gray-800 font-bold cursor-pointer bg-[#9a2de2] text-white py-1 rounded hover:bg-[#5C2D91] hover:text-white transition">
        Browse by Cinemas
      </button>

      
    </div>
  );
};

export default MovieFilters;
