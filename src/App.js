import {Switch, Route} from 'react-router-dom'
import {useState} from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import MovieDetailsPage from './Components/MovieDetailsPage'
import TopRatedMoviesRoute from './Components/TopRatedMoviesRoute'
import UpcomingMoviesRoute from './Components/UpcomingMoviesRoute'
import MoviesSearchRoute from './Components/MoviesSearchRoute'
import './App.css'

const App = () => {
  const [searchInput, setSearchInput] = useState('')

  return (
    <div className="whole-container">
      <Navbar setSearchInput={setSearchInput} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/top-rated" component={TopRatedMoviesRoute} />
        <Route exact path="/upcoming" component={UpcomingMoviesRoute} />
        <Route exact path="/movies/:movieId" component={MovieDetailsPage} />
        <Route
          exact
          path="/movies/search"
          component={MoviesSearchRoute}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </Switch>
    </div>
  )
}

export default App
