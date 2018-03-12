export default function program(
  state={},action){
  switch( action.type ){
    case 'POPUP_FORM_RESULT':
      state = { ...action.program }
      break;
  }
  return state;
}
