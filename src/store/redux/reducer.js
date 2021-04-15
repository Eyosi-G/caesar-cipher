import types from './types';
const initialState = {
    loading:false,
    text:"" 
}
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case types.loading:{
            return {...state,loading:action.payload};
        }
        case types.success:{
            return {
                ...state,
                text:action.payload
                }
          }
        default :
           return state
    }
}
export default reducer;