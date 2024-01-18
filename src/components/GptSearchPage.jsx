import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_URL } from "../utils/constants";
export const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BACKGROUND_URL} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};
