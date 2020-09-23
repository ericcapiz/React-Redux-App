import * as actions from '../actions';

const initialState = {
    nasaData:{
        title: "",
        img: ""
    }
};

export const nasaReducer = (state = initialState, action)=>{
    switch(action.type){
        case actions.FETCH_DATA:
            return{
                ...state,
            };
        case actions.FETCH_SUCCESS:
            return{
                ...state,
                nasaData: action.payload,
            };
        default:
            return state;
    }
}