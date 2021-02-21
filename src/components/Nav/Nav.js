import React from "react";
import moviesRequests from "../../utils/requests";
import "./Nav.css";

const Nav = ({ setSelectedOption }) => {
  const handleOption = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="nav">
      <h3
        onClick={() => {
          handleOption(moviesRequests.fecthTrending);
        }}
      >
        Trending
      </h3>
      <h3
        onClick={() => {
          handleOption(moviesRequests.fetchTopRated);
        }}
      >
        Top rated
      </h3>
      <h3
        onClick={() => {
          handleOption(moviesRequests.fecthActionMovies);
        }}
      >
        Action
      </h3>
      <h3
        onClick={() => {
          handleOption(moviesRequests.fetchComedyMovies);
        }}
      >
        Comedy
      </h3>
      <h3
        onClick={() => {
          handleOption(moviesRequests.fetchHorrorMovies);
        }}
      >
        Horror
      </h3>
      <h3
        onClick={() => {
          handleOption(moviesRequests.fetchMystery);
        }}
      >
        Mystery
      </h3>
      <h3
        onClick={() => {
          handleOption(moviesRequests.fetchSciFi);
        }}
      >
        Sci-Fi
      </h3>
      <h3
        onClick={() => {
          handleOption(moviesRequests.fetchWestern);
        }}
      >
        Western
      </h3>
      <h3
        onClick={() => {
          handleOption(moviesRequests.fetchAnimation);
        }}
      >
        Animation
      </h3>
      <h3
        onClick={() => {
          handleOption(moviesRequests.fetchTv);
        }}
      >
        Movie
      </h3>
    </div>
  );
};

export default Nav;
