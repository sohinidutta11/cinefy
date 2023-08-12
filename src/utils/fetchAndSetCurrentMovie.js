const fetchAndSetCurrentMovie = (id, setCurrentMovie) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=03ac313ca5f51a43e299c33711e8981d`)
    .then(response => response.json())
    .then(data => {console.log(data); setCurrentMovie(data)});
}

export default fetchAndSetCurrentMovie;