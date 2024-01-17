import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/UseNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  //Fetch Data from TMDB API and update the stored movies

  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
