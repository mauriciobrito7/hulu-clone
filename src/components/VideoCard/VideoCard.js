import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";
import { useNearScreen } from "../../hooks/useNearScreen";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  const [show, element] = useNearScreen();
  return (
    <div ref={element} className="videoCard">
      {show && (
        <div ref={ref}>
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
      )}
    </div>
  );
});

export default VideoCard;
