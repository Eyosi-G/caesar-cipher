import {delay, put, takeLatest,call,all} from 'redux-saga/effects'
import  types from './types'
import  * as utils from '../../utils/encode-decode'
function* encodeDecodeWorker(action){
    yield put({type:types.loading,payload:true});
    yield delay(1000);
    yield put({type:types.loading,payload:false})
    const shiftNumber = Number(action.payload.shiftNumber);
    const text = action.payload.text
    if(action.mode === "encode"){
        const encodedText =utils.encodeText(text,shiftNumber);
        yield put({type:types.success,payload:encodedText});
    }else if(action.mode === "decode"){
        const decodedText =utils.decodeText(text,shiftNumber);
        yield put({type:types.success,payload:decodedText});
    }

}

function* encodeDecodeWatcher(){
    yield takeLatest(types.request,encodeDecodeWorker);
}

function* allWatchers(){
    yield all([call(encodeDecodeWatcher)])
}
export default allWatchers