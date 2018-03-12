export default function multiLingual(
  state = {
    local   : "",
    lingual : "",
  },action){
    switch (action.type) {
      case "LOCALTION":
        state = { ...state, local: action.localtion }
        break;

      case "LINGUAL":
        state = { ...state, lingual: action.lingual }
        break;
    }
    return state;
  }
