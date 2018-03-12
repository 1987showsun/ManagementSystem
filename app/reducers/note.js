export default function note(
  state={
    popupWindowStatus : false,
    message           : "",
    type              : "",
  },action){
  switch( action.type ){
    case 'NOTE1':
      console.log( action.setup );
      state = {...state, popupWindowStatus: action.setup.popupWindowStatus, message: action.setup.message, type: action.setup.type }
      break;
  }
  return state;
}
