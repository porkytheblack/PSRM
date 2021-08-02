import * as t from "../types"


export const set_topnav_bg = (status) =>dispatch=>{
    dispatch({
        type: t.topnav_bg,
        payload: status
    })
}