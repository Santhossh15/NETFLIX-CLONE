import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/UseNowPlayingMovies";

const Browse = () => {
  //Fetch Data from TMDB API and update the stored movies

  useNowPlayingMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
