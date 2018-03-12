export default function popup(
  state={
    windowStatus     : false,
    selectInputIndex : 0,
    id               : '',
    action           : '',
  },action){
  switch( action.type ){
    case 'PROGRAM_POPUP_SETUP':
      state = { ...state, windowStatus: action.setup.popupWindowStatus, action: action.setup.popupAction, id: action.setup.stoer_Id, selectInputIndex: action.setup.selectInputIndex }
      break;
  }
  return state;
}
