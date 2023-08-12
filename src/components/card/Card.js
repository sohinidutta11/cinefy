import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import './Card.css'
import { Link } from "react-router-dom";


const Card = ({ movie }) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        isLoading 
        ? 
        <div className="card">
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2}/>
            </SkeletonTheme> 
        </div>
        :
        <Link to={`/movie/${movie.id}`}>
            <div className="card">
                <img className="card-img" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movie poster" />
                <div className="card-info">
                    <div className="card-title">
                        {movie.title}
                    </div>
                    <div className="card-details">
                        <span className="card-release">{movie.release_date.slice(0, 4)}</span>
                        <span className="card-rating">{movie.vote_average} <i class="fa-solid fa-star card-star"></i> </span>
                    </div>
                    <div className="card-overview">
                        {movie.overview}
                    </div>
                </div>
            </div>
        </Link>
    
    )
};

export default Card;