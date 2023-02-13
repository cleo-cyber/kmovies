import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

function Movie() {

    const getPosterPath = (posterpath) => {
        return `https://image.tmdb.org/t/p/w220_and_h330_face/${posterpath}`
    }
    let params = useParams();
    const [getDetail, setDetail] = useState({});

    const fetchDetail = async () => {
        const api = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        const data = await api.json();
        setDetail(data);

    }
    useEffect(() => {
        fetchDetail()
    }, [params.id]);

    return (
        <div>

            {getDetail.name}
            <img src={getPosterPath(getDetail.posterpath)} alt="" />
        </div>
    )
}

export default Movie