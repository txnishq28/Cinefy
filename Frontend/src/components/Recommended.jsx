import React from "react";

const Recommended = ({ movies }) => {
  return (
    <div className="w-full py-6 bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4">
      <h2 className='text-2xl font-semibold mb-6 text-white'>
        Recommended Movies
      </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {movies?.map((movie, i) => (
            <div
              key={i}
              className="rounded overflow-hidden cursor-pointer"
            >
              {/* Poster */}
              <div className="relative">
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="w-full h-[300px] object-cover rounded"
                />
              </div>

              {/* Rating Bar */}
              <div className="bg-black text-white text-sm px-2 py-1 flex items-center justify-between">
                <span>⭐ {movie.rating}/10</span>
                <span>{movie.votes} Votes</span>
              </div>

              {/* Title + Genre */}
              <div className="px-2 py-1">
                <h3 className="font-semibold text-lg text-white">
                  {movie.title}
                </h3>

                <p className="text-md text-gray-100">
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
