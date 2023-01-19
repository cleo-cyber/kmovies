import styled from "styled-components"


function NavBar() {
  return (
    <div className="nav">
      <Label>
        <div className="logo">
          <h2>Kmovies</h2>
        </div>
        <div className="links">
          <ul>
            <li>Home</li>
            <li>Movies</li>
            <li>Shows</li>
            <li>Most Viewed</li>
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