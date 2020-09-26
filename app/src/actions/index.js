import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";


export const fetchData = () => (dispatch) =>{

    const randomDay = Math.floor(Math.random() * 31) + 1;
    const randomMonth = Math.floor(Math.random() * 12) + 1;

    dispatch({type: FETCH_DATA});

    axios.get(`https://api.nasa.gov/planetary/apod?date=2017-${randomMonth}-${randomDay}&api_key=kJyIRdMDp5CtmX53QRvUf90MmBwpN781eyhab7Ea`).then((res)=>{
        console.log("data", res);
        dispatch({
            type: FETCH_SUCCESS,
            payload:
                {
                    media_type:res.data.media_type,
                    title:res.data.title,
                     url: res.data.url
                }
            })
        })
       .catch((err)=>{
           alert("Error Loading API");
       })
    
};
