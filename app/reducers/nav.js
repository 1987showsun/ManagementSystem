export default function nav(
  state={
    data : [],
    sub  : [],
  },action){
  switch( action.type ){
    case 'MAIN_NAV':
      state = {...state, data: action.data}
      break;

    case 'SUB_NAV':
      state = {...state, sub : action.sub}
      break;
  }
  return state;
}
