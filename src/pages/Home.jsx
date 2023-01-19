import Popular from '../components/PopularMovies'
import Shows from '../components/PopularShows'
import Upcoming from '../components/Upcoming'
import Search from '../components/SearchedItem'
function Home() {
  return (
    <div>
        <Search />
        <Popular />
        <Shows />
        <Upcoming />
    </div>
  )
}

export default Home