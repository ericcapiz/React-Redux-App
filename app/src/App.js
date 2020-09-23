import React, { useEffect } from 'react';
import { fetchData } from "./actions";
import { connect } from "react-redux";
import styled from 'styled-components';

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
    <div className="App">
      <header className="App-header">
       <h1>Nasa Images</h1>
       <Button onClick={() => window.location.reload(false)}>Click to get a random picture</Button>
  <h3>{props.nasaData.title}</h3>
       <img src={props.nasaData.img}></img>
      </header>
    </div>
  );
}

const mapStateToProps =(state)=>{
  return{
    nasaData:state.nasaData
  }
}
export default connect (mapStateToProps,{fetchData})(App);
