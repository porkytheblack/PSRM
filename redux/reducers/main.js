import * as t from "../types"

const main = (state={
    topnav_bg: false
}, action)=>{
    switch(action.type){
        case t.topnav_bg:
            return{
                ...state,
                topnav_bg: action.payload
            }
        default:
            return {...state}
    }
}

export default main;

