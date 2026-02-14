import React, { useMemo, useState } from "react";
import m4 from "../assets/m4.avif";
import { theatres, filters } from "../utils/constants.js";

const movie = {
  id: 4,
  title: "F1: The Movie",
  genre: "Sports, Documentary",
  rating: "9.5/10",
  votes: "6.8K Votes",
  img: m4,
  languages: "English, Hindi, Tamil, Telugu",
  age: "UA16+",
  duration: "2h",
  release: "10 Jul, 2025",
  about:
    "An inside look at the world of Formula 1 racing and its iconic champions.",
};

const getNextDates = (count = 7) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return Array.from({ length: count }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      day: days[d.getDay()],
      date: d.getDate(),
      fullDate: d,
    };
  });
};

const MovieDetails = () => {
  const [activeDate, setActiveDate] = useState(0);
  const [activeFormat, setActiveFormat] = useState(null);

  const dates = useMemo(() => getNextDates(7), []);

  const filteredTheatres = useMemo(() => {
    return theatres.map((theatre) => {
      let timings = theatre.timings;
      if (activeFormat) {
        timings = timings.filter((t) =>
          t.label.toLowerCase().includes(activeFormat.toLowerCase())
        );
      }
      return { ...theatre, timings };
    });
  }, [activeFormat]);

  return (
    <div className="w-full bg-[#0b0714] text-white">
      {/* Hero Banner */}
      <div
        className="relative h-[280px] bg-cover bg-center"
        style={{ backgroundImage: `url(${movie.img})` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        <div className="relative z-10 max-w-6xl mx-auto flex items-center gap-6 h-full px-6">
          <img
            src={movie.img}
            alt={movie.title}
            className="w-40 rounded-xl shadow-2xl ring-2 ring-purple-600/40"
          />
          <div>
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p className="text-sm text-gray-300 mt-1">
              {movie.duration} • {movie.genre} • {movie.age} • {movie.release}
            </p>
            <p className="text-sm mt-2 text-purple-300">
              ⭐ {movie.rating} • {movie.votes}
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-6 py-6 border-b border-purple-800/30">
        <h2 className="text-lg font-semibold mb-2">About the movie</h2>
        <p className="text-sm text-gray-300">{movie.about}</p>
      </div>

      {/* Filters (Formats) */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap gap-2">
        {filters.map((f, i) => (
          <button
            key={i}
            onClick={() => setActiveFormat(activeFormat === f ? null : f)}
            className={`border px-3 py-1 rounded-full text-xs transition ${
              activeFormat === f
                ? "bg-purple-700 text-white border-purple-500"
                : "bg-[#120a24] text-purple-300 border-purple-700/40 hover:bg-purple-700/20"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Dates (Dynamic) */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto">
        {dates.map((d, i) => (
          <div
            key={i}
            onClick={() => setActiveDate(i)}
            className={`min-w-[52px] h-16 rounded-xl flex flex-col items-center justify-center text-xs border transition cursor-pointer ${
              activeDate === i
                ? "bg-purple-700 border-purple-500"
                : "bg-[#120a24] border-purple-700/40 hover:bg-purple-700/20"
            }`}
          >
            <span className="font-semibold text-white">{d.date}</span>
            <span className="text-[10px] text-gray-300">{d.day}</span>
          </div>
        ))}
      </div>

      {/* Theatres & Showtimes */}
      <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        {filteredTheatres.map((theatre, i) => (
          <div
            key={i}
            className="flex gap-6 border-b border-purple-800/20 pb-6 last:border-none"
          >
            {/* Theatre Info */}
            <div className="w-80">
              <div className="flex items-start gap-3">
                <img
                  src={theatre.img}
                  alt={theatre.name}
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <h3 className="font-medium text-white">
                    {theatre.name}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {theatre.distance} • {theatre.cancellation}
                  </p>
                </div>
              </div>
            </div>

            {/* Show Timings */}
            <div className="flex flex-wrap gap-3">
              {theatre.timings.map((slot, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-2 rounded-lg text-sm flex flex-col items-center border transition ${
                    slot.highlight
                      ? "border-purple-500 bg-purple-700 text-white shadow-purple-900/40 shadow"
                      : "border-purple-700/40 text-gray-200 hover:bg-purple-700/20"
                  }`}
                >
                  <span>{slot.time}</span>
                  <span className="text-[10px] text-gray-300">
                    {slot.label}
                  </span>
                </button>
              ))}

              {theatre.timings.length === 0 && (
                <p className="text-sm text-gray-400">
                  No shows for selected format
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;