// Write your Character component here
import React from "react";
import styled from 'styled-components'

const StyledContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`

const StyledCharacters = styled.div`

background-color: white; opacity:60%;
width: 30%;
border: 5px solid black; 

margin: 1%;

div{
    padding:1%;
    font-family: 'Nothing You Could Do', cursive;
    font-size:1.5rem;
}

h2{
    font-family: 'Fredericka the Great', cursive;
    font-size:2.5rem;
}

`


function Character (props){
    const {data} = props

    return ( 
        <StyledContainer className = "container">
            {
               data.map(character =>{
                    return <StyledCharacters key = {character.name}><h2>{character.name}</h2> 
                       <div>Height : {character.height}</div>
                       <div> Year of Birth : {character.birth_year}</div>
                       <div> Gender : {character.gender}</div>
                    
                    </StyledCharacters> 
                  
                  
                 
                })
            }
        </StyledContainer>
    )
}

export default Character;
