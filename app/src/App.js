import React, { useEffect } from 'react';
import { fetchData } from "./actions";
import { connect } from "react-redux";
import styled from 'styled-components';

const MainDiv = styled.div `
//  display: flex;
//  justify-content: center;
//  align-content:center;

display: flex;
flex-flow:row;
justify-content: space-evenly;
padding: 0;
width: 100%;
height: 100vh;
background-color: black;
color:white;
background: black;
animation: colorchg 7s infinite;
}

@keyframes colorchg {
  0% { background-color: #e6058c}
  25% { background-color: #760487; }
  50% { background-color: #8405e6 }
  75% { background-color: #1a07ab }
  100% { background-color: #2194a6 }
}
    

img{
    width:600px;
    height: 500px;
    border-radius: 12px;
    
    
}

`;

const Button = styled.button `
    padding: 15px;
    border-radius: 10px;
    background-color: #26457a;
    color: dodgerblue;
    -webkit-box-shadow: 5px 5px 3px 0px purple;
    -moz-box-shadow: 5px 5px 3px 0px purple;
    box-shadow: 5px 5px 3px 0px purple;
    outline: none;
    cursor:pointer;
`;

const App=(props)=> {
  useEffect(()=>{
    props.fetchData();
  },[])
  return (
    <MainDiv>
      <header className="App-header">
       <h1>Nasa Images</h1>
       <Button onClick={() => window.location.reload(false)}>Click to get a random picture</Button>
  <h3>{props.nasaData.title}</h3>
       <img src={props.nasaData.img}></img>
      </header>
    </MainDiv>
  );
}

const mapStateToProps =(state)=>{
  return{
    nasaData:state.nasaData
  }
}
export default connect (mapStateToProps,{fetchData})(App);
