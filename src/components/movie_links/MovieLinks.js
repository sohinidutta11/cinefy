import React from "react";  
import "./MovieLinks.css"

const MovieLinks = (props) => {
    return (
        <div className="movie-links">
            <a href={props.homepageUrl} target="_blank" rel="noreferrer" className="link-item">
                <i class="fa-solid fa-house movie-link"></i>
            </a>
            <a href={props.imdbUrl} target="_blank" rel="noreferrer" className="link-item">
                <i class="fa-brands fa-imdb movie-link"></i>
            </a>
            <a href={props.googleUrl} target="_blank" rel="noreferrer" className="link-item">
                <i class="fa-brands fa-google movie-link"></i>
            </a>
        </div>
    )
}

export default MovieLinks;