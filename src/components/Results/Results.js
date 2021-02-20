import React, { useState, useEffect } from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./Results.css";
import moviesRequests from "../../utils/requests";
import axios from "../../utils/axios";

const Results = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(moviesRequests.fecthTrending);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Results;
