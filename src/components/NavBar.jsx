import styled from "styled-components"
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <div className="nav">
      <Label>
        <div className="logo">
          <h2>Kmovies</h2>
        </div>
        <div className="links">
          <ul>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/movies/'}>Movies</NavLink>
            <NavLink to={'/Shows'}>Shows</NavLink>
            <NavLink to={'/popular'}>Most Viewed</NavLink>
          </ul>
        </div>

      </Label>
    </div>
  )
}

const Label=styled.span`

display:flex;
justify-content:space-between;
padding:1rem 5rem;
text-align:center;
ul{
  display:flex;
  padding:0rem 2rem;
  font-weight:18px;
  gap:2rem;
}
`

export default NavBar