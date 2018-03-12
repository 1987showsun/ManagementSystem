export default function post(
  state={
    formLeaveSubmit : [],
    posAddTask      : [],
    selectInputName : '',
  },action){
  switch( action.type ){
    case 'LEAVE_FORM_SUBMIT':
      state = {...state, formLeaveSubmit: action.leaveCategory}
      break;

    case 'POS_ADD_TASK':
      state = {...state, posAddTask: action.task}
      break;
  }
  return state;
}
