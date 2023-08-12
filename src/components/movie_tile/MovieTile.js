import React from "react";
import "./MovieTile.css"


const MovieCover = (props) => {
    return (
        <div className="cover-container">
            <img className="cover-img" src={props.coverUrl} alt="movie poster" />
            <div className="inner-container">
                <img className="poster-img" src={props.posterUrl} alt="movie poster" />
                <div className="movie-info">
                    <div className="movie-title">
                        {props.title}
                    </div>
                    <div className="movie-details">
                        <span className="movie-release">{props.releaseDate}</span>
                        <span className="movie-rating">{props.rating} <i class="fa-solid fa-star movie-star"></i> </span>
                    </div>
                    <div className="movie-overview">
                        {props.overview}
                    </div>
                    <div className="movie-genres">
                        {
                            props.genres && props.genres.map((genre) => {
                                return <span className="movie-genre">{genre.name}</span>
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCover;