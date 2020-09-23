import REACT from 'react';

const Nasa = (props)=>{
    return(
        <div>
            <h1>{props.nasaData.title}</h1>
            <img src={props.nasaData.url}></img>
        </div>
    )
}
export default Nasa;