import styled from "styled-components"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import { useState, useEffect } from "react"
import { Fade } from "react-reveal";

function Popular() {

    const getPosterPath = (posterpath) => {
        return `https://image.tmdb.org/t/p/w220_and_h330_face/${posterpath}`
    }

    const [popularShows, setPopularShows] = useState([]);

    const getPopular = async () => {
        const api = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
        const data = await api.json();
        setPopularShows(data.results);
    }

    useEffect(() => {
        getPopular();
    }, [])
    return (
        <Wrapper>
            <h2>Popular Shows</h2>
            <Fade bottom>
            <Splide options={{
                perPage:4,
                arrows:false,
                drag:"free",
                pagination:false,
                gap:'5rem',
                snap:true,
                breakpoints:{
                    1201:{
                        perPage:4,
                    },
                    1024:{
                        perPage:4,
                    },
                    768:{
                        perPage:3,
                    },
                    480:{
                        perPage:1,
                    }
                }
            }}>
                {popularShows.map((popular) => {

                    return (
                        <SplideSlide key={popular.id}>
                        <Card >
                           
                            <img src={getPosterPath(popular.poster_path)} alt="Poster"
                             />
                            <Heading2>{popular.title}</Heading2>
                            <Vote>
                            <p>{popular.release_date}</p>
                            <p>ratings :{popular.vote_average}</p>
                            </Vote>
                        </Card>
                        </SplideSlide>
                    )
                })}
            </Splide>
            </Fade>
        </Wrapper>
    )
}
const Wrapper=styled.div`
margin:2rem 2rem;
`
const Heading2=styled.h2`
color:#000;
font-weight:600;



`

const Vote=styled.div`

display:flex;
justify-content:space-between;
font-weight:900;
`
const Card = styled.div`
min-height:25rem;
border-radius:2rem;
overflow:hidden;
position:relative;
img{
    width:100%;
    height:100%;
    object-fit:cover;
    left:0;
}
p{
    font-weight:600;
    color:#333;
}
`






export default Popular