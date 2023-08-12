import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../card/Card";
import './MovieList.css';
import fetchAndSetMovieList from "../../utils/fetchAndSetMovieList";

const Heading = {
    popular: 'Popular Movies',
    top_rated: 'Top Rated Movies',
    upcoming: 'Upcoming Movies',
}

const MovieList = () => {

    const [movieList, setMovieList] = useState([]);
    const { type } = useParams();
    const heading = type ? Heading[type] : 'Now Playing';

    useEffect(() => {
        fetchAndSetMovieList(type, setMovieList);
    }, [type]);

    return (
        <div className="movie-list">
             <h1 className="movie-list-heading">{movieList.length !== 0 ? heading : "Check the URL"}</h1>
             <div className="movie-list-item">{movieList.map(movie => <Card movie={movie} />)}</div>
        </div>
    )
};

export default MovieList;