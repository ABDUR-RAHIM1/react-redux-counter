

//  actions 

import { DECREMENT, INCREMENT, RESET } from "./constanse"

export const inCrementCount = ()=>{
     return{
        type : INCREMENT
     }
}
export const deCrementCount = ()=>{
    return{
       type : DECREMENT
    }
}

export const resetCount = ()=>{
    return{
       type : RESET
    }
}