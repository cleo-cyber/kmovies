import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
function SearchItem() {


    const getPosterPath = (posterpath) => {
        return `https://image.tmdb.org/t/p/w220_and_h330_face/${posterpath}`
    }
    const [getMultiSearch, setmultiSearch] = useState([]);
      let params = useParams();

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

  
    const getSearched = async (name) => {
        const api = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`)
        const data = await api.json();
        setmultiSearch(data.results);
    }
    return (
        <Grid>
            {getMultiSearch.map((searched) => {
                return(
                <Card key={searched.id}>
                <img src={getPosterPath(searched.poster_path)} alt="Poster"
                />
                <Heading2>{searched.title}</Heading2>
                <Vote>
                    <p>{searched.release_date}</p>
                    <p>ratings :{searched.vote_average}</p>
                </Vote>
                </Card>
                );
            })}
        </Grid>
    )
}
const Grid=styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
grid-gap:3rem;
margin-top:2rem;
`


const Heading2 = styled.h2`
color:#000;
font-weight:600;



`

const Vote = styled.div`

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

}
p{
    font-weight:600;
    color:#333;
}
`
export default SearchItem