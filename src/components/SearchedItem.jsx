import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom';
function Search() {



    const navigate=useNavigate()
    const [getInput,setInput]=useState("");


    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate("/Searched/"+getInput)

    }

    return (
        <div>
            <div className='hero_opacity'>
                <HeroBackground>
                    < InnerContainer>
                        <h1>Welcome</h1>
                        <p>Explore every movie taste for free</p>
                    </InnerContainer>
                    <Form onSubmit={handleSubmit}>

                        <input onChange={(e)=>setInput(e.target.value)} type="text" value={getInput}/>
                      
                    </Form>
                </HeroBackground>

            </div>
        </div>
    )
}

const HeroBackground = styled.div`
position:relative;
top:0;
background:#000;
opacity:.8;
padding:10rem 3rem;


`
const InnerContainer=styled.div`
h1,p{
  
    color:#fff;
    
}
h1{
    font-size:3rem;
}
p{
    font-size:2rem;
    font-weight:200;
}

`
const Form = styled.form`

width:100%;

input{
    border:none;
    background:#fff;
    font-size:1.5rem;
    border-radius;1rem
    outline:none;
    width:100%;
    
}
`


export default Search