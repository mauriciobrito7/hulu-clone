import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <h3>{movie.title || movie.original_name}</h3>
      <TextTruncate
        line={2}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <p className="videoCard__stats">
        <span>{movie.media_type && `${movie.media_type}`}</span>
        <span>{movie.release_date || movie.first_air_date}</span>
        <span>
          {movie.vote_count}
          <ThumbUpSharp />
        </span>
      </p>
    </div>
  );
});

export default VideoCard;
