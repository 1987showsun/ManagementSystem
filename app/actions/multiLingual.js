import axios                              from 'axios';

export function localtion(local){
  return function(dispatch){
    dispatch({ type:"LOCALTION", localtion: local })
  }
}

export function lingual(local){
  return function(dispatch){
    axios.get('../locale-data/zh-TW.json').then((data)=>{
      //dispatch({ type:"LINGUAL", lingual: data.data[0][local] })
    });
  }
}
