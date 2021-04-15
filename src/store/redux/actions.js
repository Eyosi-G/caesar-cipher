import types from "./types";

const encodeDecode = (text,shiftNumber,mode)=>({
    type:types.request,
    mode,
    payload:{
        text,
        shiftNumber
    }
});
export default encodeDecode