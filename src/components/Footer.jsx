import React from 'react'
import styled from 'styled-components'


function Footer() {
  return (
    <FooterStyle>
        <footer>
            <div>
                <h2>Help</h2>
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                    <li></li>
                </ul>
            </div>
            <div>
                <h2>Top List</h2>
                <ul>
                    <li>Top Kmovies</li>
                    <li>Favourites</li>
                    <li>Most Viewed</li>
                </ul>
            </div>
            <div>
                <h1>Stay connected</h1>
                <p>Follow us on our social networking sites and get recent updates</p>
            </div>
        </footer>
        <FooterLogo>
            <h2>Kmovies</h2>
        </FooterLogo>
    </FooterStyle>
  )
}

const FooterStyle=styled.div`
background:hsla(229, 8%, 60%, 0.1);
width:100%;


footer{
    display:flex;
    justify-content:space-between;
    padding:2rem 3rem;
    flex-wrap:wrap;
    align-items:center;
}
ul{
    margin:0;

}
li{
    font-size:1.3rem;
    text-align:left;
    padding:.5rem 0;
}
h2{
    text-align:center;

}
p{
    font-size:1.3rem;
}
`
const FooterLogo=styled.div`
font-size:3rem;
padding:2rem 0rem;
`
export default Footer