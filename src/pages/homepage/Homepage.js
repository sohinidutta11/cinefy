import React, { useEffect, useState } from "react";
import './Homepage.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movie_list/MovieList";

const Homepage = () => {

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=03ac313ca5f51a43e299c33711e8981d')
        .then(response => response.json())
        .then(data => {
            setPopularMovies(data.results);
        });
    }, []);

    console.log(popularMovies);

    return (
        <div className="homepage">
            <Carousel 
                showThumbs={false} 
                autoPlay={true} 
                transitionTime={3} 
                infiniteLoop={true} 
                showStatus={false}
                className="carousel">{
                    popularMovies.map((movie) => 
                        <Link to={`movie/${movie.id}`}>
                            <img className="home-img" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="movie poster" />
                            <div className="home-info">
                                <div className="home-title">
                                    {movie.title}
                                </div>
                                <div className="home-details">
                                    <span className="home-release">{movie.release_date.slice(0, 4)}</span> 
                                    <span className="pipe">|</span>
                                    <span className="home-rating">{movie.vote_average} <i class="fa-solid fa-star home-star"></i> </span>
                                </div>
                                <div className="home-overview">
                                    {movie.overview}
                                </div>
                            </div>
                        </Link>
                    )
                }
            </Carousel>
            <MovieList />
        </div>
    );
};

export default Homepage;
