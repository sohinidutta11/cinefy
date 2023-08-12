const fetchAndSetMovieList = (type, setMovieList) => {
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : 'now_playing'}?api_key=03ac313ca5f51a43e299c33711e8981d`)
    .then(response => response.json())
    .then(data => {
        setMovieList(data.results ? data.results : []);
    });
}

export default fetchAndSetMovieList;