import SearchItem from "./Search"
import Home from "./Home"
import { Route,Routes } from "react-router-dom"
import Movie from "./Movie"

function Pages() {
  return (
    <Routes>
       
       <Route path="/" element={ <Home />}/>
       <Route path="/Searched/:search" element={<SearchItem />}/>
       <Route path="/movie/:id" element={<Movie />}/>
    </Routes>
  )
}

export default Pages