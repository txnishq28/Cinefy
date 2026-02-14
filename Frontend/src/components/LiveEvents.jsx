import React from "react";
import { events } from "../utils/constants";

const LiveEvents = () => {
  return (
    <div className="w-full bg-[#0b0714] py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          The Best Of Live Events
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden relative cursor-pointer bg-[#120a24]/80 backdrop-blur border border-purple-800/30 shadow-lg hover:shadow-purple-900/40 transition"
            >
              {/* Poster */}
              <div className="relative overflow-hidden">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
              </div>

              {/* Optional title strip (if you want to show names later) */}
              {/* 
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur text-white text-xs px-3 py-2">
                {event.title}
              </div> 
              */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveEvents;