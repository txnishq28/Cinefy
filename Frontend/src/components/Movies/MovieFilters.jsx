import React from "react";

const MovieFilters = ({ languages = [] }) => {
  return (
    <div className="w-full md:w-1/4 p-4 space-y-6 text-white">
      <h2 className="text-2xl font-semibold">Filters</h2>

      {/* Language */}
      <div className="bg-[#120a24]/80 backdrop-blur border border-purple-800/30 p-4 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-3">
          <span className="font-medium text-white">Languages</span>
          <button className="text-purple-400 text-sm hover:text-purple-300 transition">
            Clear
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {languages.map((lang, i) => (
            <span
              key={i}
              className="border border-purple-700/40 text-purple-300 px-3 py-1 text-xs rounded-full hover:bg-purple-700/20 cursor-pointer transition"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Genres */}
      <div className="bg-[#120a24]/80 backdrop-blur border border-purple-800/30 p-4 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-3">
          <span className="font-medium text-white">Genres</span>
          <button className="text-purple-400 text-sm hover:text-purple-300 transition">
            Clear
          </button>
        </div>

        {/* Placeholder chips (add real data later) */}
        <div className="flex flex-wrap gap-2 text-xs text-gray-300">
          <span className="border border-purple-700/40 px-3 py-1 rounded-full">
            Action
          </span>
          <span className="border border-purple-700/40 px-3 py-1 rounded-full">
            Drama
          </span>
          <span className="border border-purple-700/40 px-3 py-1 rounded-full">
            Comedy
          </span>
        </div>
      </div>

      {/* Format */}
      <div className="bg-[#120a24]/80 backdrop-blur border border-purple-800/30 p-4 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-3">
          <span className="font-medium text-white">Format</span>
          <button className="text-purple-400 text-sm hover:text-purple-300 transition">
            Clear
          </button>
        </div>

        {/* Placeholder chips */}
        <div className="flex flex-wrap gap-2 text-xs text-gray-300">
          <span className="border border-purple-700/40 px-3 py-1 rounded-full">
            2D
          </span>
          <span className="border border-purple-700/40 px-3 py-1 rounded-full">
            3D
          </span>
          <span className="border border-purple-700/40 px-3 py-1 rounded-full">
            IMAX
          </span>
        </div>
      </div>

      {/* CTA */}
      <button className="w-full bg-purple-700 hover:bg-purple-600 transition text-white py-2 rounded-lg font-medium shadow-lg shadow-purple-900/30">
        Browse by Cinemas
      </button>
    </div>
  );
};

export default MovieFilters;