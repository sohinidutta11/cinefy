import { useEffect, useState } from "react";
import "./Movie.css";
import { useParams } from "react-router-dom";
import MovieTile from "../../components/movie_tile/MovieTile";
import MovieLinks from "../../components/movie_links/MovieLinks";
import fetchAndSetCurrentMovie from "../../utils/fetchAndSetCurrentMovie";
import Skeleton,{ SkeletonTheme } from "react-loading-skeleton";

const Movie = () => {
    const [currentMovie, setCurrentMovie] = useState({});
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    useEffect(() => {
        fetchAndSetCurrentMovie(id, setCurrentMovie);
    }, [id]);

    const coverUrl = `https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`;
    const posterUrl = `https://image.tmdb.org/t/p/original${currentMovie.poster_path}`;

    const imdbUrl = `https://www.imdb.com/title/${currentMovie.imdb_id}`;
    const googleUrl = `https://www.google.com/search?q=${currentMovie.original_title}`;

    return (
        <>
            {
                isLoading
                ?
                <div className="movie-container">
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                        <Skeleton height={300} duration={2}/>
                    </SkeletonTheme>
                </div>
                :
                <div className="movie-container">
                    <MovieTile 
                        coverUrl={coverUrl} 
                        posterUrl={posterUrl} 
                        title={currentMovie.title}
                        releaseDate={currentMovie.release_date}
                        rating={currentMovie.vote_average}
                        overview={currentMovie.overview}
                        genres={currentMovie.genres}
                    />
                    <MovieLinks 
                        homepageUrl={currentMovie.homepage} 
                        imdbUrl={imdbUrl} 
                        googleUrl={googleUrl}
                    />
                </div>
            }   
        </>
    );
    
};

export default Movie;