import './index.css'

function MovieDetails({movie}) {
  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <p>Rating: {movie.vote_average}</p>
      <p>Duration: {movie.runtime} minutes</p>
      <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>{movie.overview}</p>
    </div>
  )
}

export default MovieDetails
