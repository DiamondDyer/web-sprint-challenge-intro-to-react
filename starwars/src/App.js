import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import {BASE_URL} from './apiurl'
import Character from './components/Character'
import styled from 'styled-components'

const StyledHeader = styled.div`
h1{
  font-family:'Fredericka the Great', cursive;
  font-size:3rem;
}
`



const App = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`${BASE_URL}`)
    .then( res => {
      setData(res.data.results)
      console.log(res.data.results)
    })
    .catch(err => {
      console.dir(err)
    })
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <StyledHeader className="Header"><h1>Star Wars Characters</h1></StyledHeader>
      <div>
        <Character  data = {data}/>
        
      </div>
      
    </div>
  );
}

export default App;
