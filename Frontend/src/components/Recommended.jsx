import React from "react";

const Recommended = ({ movies }) => {
  return (
    <div className="w-full py-8 bg-[#0b0714]">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="items-center flex justify-between mb-6">
          <h2 className="text-2xl font-semibold text-white">
            Recommended Movies
          </h2>

          <span className="text-sm text-purple-400 cursor-pointer hover:text-purple-300 transition">
            See All
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {movies?.map((movie, i) => (
            <div
              key={i}
              className="group rounded-xl overflow-hidden cursor-pointer bg-[#120a24]/80 backdrop-blur border border-purple-800/30 shadow-lg hover:shadow-purple-900/40 transition"
            >
              {/* Poster */}
              <div className="relative overflow-hidden">
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
              </div>

              {/* Rating Bar */}
              <div className="bg-[#0b0714] text-gray-200 text-xs px-3 py-2 flex items-center justify-between border-t border-purple-800/30">
                <span className="text-purple-300">
                  ⭐ {movie.rating}/10
                </span>
                <span className="text-gray-400">
                  {movie.votes} Votes
                </span>
              </div>

              {/* Title + Genre */}
              <div className="px-3 py-3">
                <h3 className="font-semibold text-sm text-white truncate">
                  {movie.title}
                </h3>

                <p className="text-xs text-gray-400 mt-1">
                  {movie.genre?.replaceAll("/", ", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommended;