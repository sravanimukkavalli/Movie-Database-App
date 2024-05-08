import {Link} from 'react-router-dom'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props

  return (
    <li className="movie-card">
      <img
        key={movieDetails.id}
        src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <div className="movie-details">
        <h3>{movieDetails.title}</h3>
        <p>Rating: {movieDetails.vote_average}</p>
        <Link to={`/movies/${movieDetails.id}`}>
          <button type="button">View Details</button>
        </Link>
      </div>
    </li>
  )
}
export default MovieItem
