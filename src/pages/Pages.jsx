import SearchItem from "./Search"
import Home from "./Home"
import { Route,Routes } from "react-router-dom"

function Pages() {
  return (
    <Routes>
       
       <Route path="/" element={ <Home />}/>
       <Route path="/Searched/:search" element={<SearchItem />}/>
       
    </Routes>
  )
}

export default Pages