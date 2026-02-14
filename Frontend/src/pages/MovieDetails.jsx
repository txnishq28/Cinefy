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
    <div className="w-full bg-gray-900 ">
      {/* Hero Banner */}
      <div
        className="relative h-[260px] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${movie.img})` }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-6xl mx-auto flex items-center gap-6 h-full px-6">
          <img
            src={movie.img}
            alt={movie.title}
            className="w-36 rounded-lg shadow-lg"
          />
          <div>
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p className="text-sm text-gray-300 mt-1">
              {movie.duration} • {movie.genre} • {movie.age} • {movie.release}
            </p>
            <p className="text-sm mt-2">
              ⭐ {movie.rating} • {movie.votes}
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl bg-gray-800 mx-auto px-6 py-6 border-b">
        <h2 className="text-lg text-gray-100 font-semibold mb-2">
          About the movie
        </h2>
        <p className="text-sm text-gray-100">{movie.about}</p>
      </div>

      {/* Filters (Formats) */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap gap-2">
        {filters.map((f, i) => (
          <button
            key={i}
            onClick={() => setActiveFormat(activeFormat === f ? null : f)}
            className={`border px-3 py-1 rounded-full text-xs cursor-pointer ${
              activeFormat === f
                ? "bg-purple-700 text-white border-purple-500"
                : "bg-gray-800 text-[#aa42f0] hover:bg-gray-900"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Dates (Dynamic) */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto text-white">
        {dates.map((d, i) => (
          <div
            key={i}
            onClick={() => setActiveDate(i)}
            className={`min-w-[48px] h-14 rounded flex flex-col items-center justify-center text-xs border cursor-pointer ${
              activeDate === i ? "bg-purple-700" : "hover:bg-gray-700"
            }`}
          >
            <span className="font-semibold">{d.date}</span>
            <span className="text-[10px]">{d.day}</span>
          </div>
        ))}
      </div>

      {/* Theatres & Showtimes */}
      <div className="max-w-6xl mx-auto px-6 py-6 space-y-8 text-amber-50">
        {filteredTheatres.map((theatre, i) => (
          <div
            key={i}
            className="flex gap-4 border-b pb-6 last:border-none"
          >
            {/* Theatre Info */}
            <div className="w-72">
              <div className="flex items-start gap-3">
                <img
                  src={theatre.img}
                  alt={theatre.name}
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <h3 className="font-medium">{theatre.name}</h3>
                  <p className="text-xs text-gray-500">
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
                  className={`border px-4 py-2 rounded text-sm flex flex-col items-center ${
                    slot.highlight
                      ? "border-purple-500 text-white bg-purple-700"
                      : "hover:bg-gray-600"
                  }`}
                >
                  <span>{slot.time}</span>
                  <span className="text-[10px] text-gray-100">
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