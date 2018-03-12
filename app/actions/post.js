import axios                              from 'axios';

export function formLeaveSubmit(val){
  console.log(val);
  return function(dispatch){
    axios.post('http://localhost:5000/post/leave/form',{
      val: val
    }).then((data)=>{
      console.log(data);
      //dispatch({ type:"LEAVE_CATEGORY", leaveCategory: data.data.data[0]['leave']['category']})
    });
  }
}

export function posAddTask(val){
  return function(dispatch){
    axios.post('http://localhost:5000/post/pos/addTask',{
      val: val
    }).then((data)=>{
      dispatch({ type:"POS_ADD_TASK", task:data.data.data.ops[0] })
    });
  }
}
