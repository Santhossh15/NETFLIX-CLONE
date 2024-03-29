import React from "react";
import { IMG_URL } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-34 md:w-48 pr-4">
      <img className="" src={IMG_URL + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
