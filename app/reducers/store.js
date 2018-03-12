import { combineReducers } from "redux";

//import reducer
import home                from './home';
import nav                 from './nav';
import api                 from './api';
import multiLingual        from './multiLingual';
import post                from './post';
import popup               from './popup';
import program             from './program';
import note                from './note';


export default combineReducers({
  home,
  nav,
  multiLingual,
  api,
  post,
  popup,
  program,
  note
})
