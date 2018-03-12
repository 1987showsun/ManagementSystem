export default function Home(
  state=[

  ],action){
  switch( action.type ){
    case 'TEST':
      state = {...state}
      break;
  }
  return state;
}
