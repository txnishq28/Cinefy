import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-40 md:w-52 cursor-pointer group">
      {/* Poster */}
      <div className="relative overflow-hidden rounded-xl border border-purple-800/30 shadow-lg bg-[#120a24]/80 backdrop-blur">
        <img
          src={movie.img}
          alt={movie.title}
          className="w-full h-[260px] object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
      </div>

      {/* Info */}
      <div className="mt-3 space-y-0.5">
        <p className="font-medium text-white truncate">
          {movie.title}
        </p>

        <p className="text-xs text-purple-300">
          ⭐ {movie.rating} | {movie.votes}
        </p>

        <p className="text-xs text-gray-400">{movie.age}</p>

        <p className="text-xs text-gray-400 truncate">
          {movie.languages}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;