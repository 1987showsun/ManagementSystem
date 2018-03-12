import axios                              from 'axios';

export function statusApi(){
  return function(dispatch){
    axios.get('http://localhost:5000/api/status').then((data)=>{
      dispatch({ type:"FORM_SCHEDULE_STATUS", formStatus: data.data.data})
    });
  }
}
