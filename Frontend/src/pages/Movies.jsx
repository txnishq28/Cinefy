import React from "react";
import BannerSlider from "../components/shared/BannerSlider";
import MovieFilters from "../components/Movies/MovieFilters";
import { languages } from "../utils/constants";
import MovieList from "../components/Movies/MovieList";

const Movies = () => {
  return (
    <div>
      <BannerSlider />

      <div className="flex flex-col md:flex-row bg-[#0b0714] min-h-screen md:px-[100px] pb-10 pt-8">
        <MovieFilters languages={languages} />
        <MovieList/>
      </div>
      
    </div>
  );
};

export default Movies;
