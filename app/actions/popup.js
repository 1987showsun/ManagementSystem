import axios                              from 'axios';

export function popup( setup ){
  return function(dispatch){
    dispatch({type:"PROGRAM_POPUP_SETUP", setup: setup});
  }
}

export function addProgramArray(program){
  return function(dispatch){
    dispatch({type:"POPUP_FORM_RESULT", program: program})
  }
}

export function selectProgram( formResult,selectInputIndex,selectAddOption ){
  return function(dispatch){
    let selectOptionObject = formResult[0]['allProgram'][selectInputIndex]['project'],
        result             = [];

    selectOptionObject.push(selectAddOption);
    result = selectOptionObject.filter((el,i,arr)=>{
      let before = selectOptionObject.map((item,i)=>{
        return item.id;
      }).indexOf(el.id);
      if( before===i ){
        return el
      }
    })
    formResult[0]['allProgram'][selectInputIndex]['project'] = result;

    let dddd = selectInputIndex +1;

    dispatch({type:"POPUP_FORM_RESULT", formResult: formResult  });
  }
}

export function selectProgramOption( program,selectAddProgramOption,selectInputIndex ){
  let beforeProgram = program[selectInputIndex]['project'],
      afterProgram  = [];

  beforeProgram.push(selectAddProgramOption);
  afterProgram = beforeProgram.filter((el,i,arr)=>{
    let before = beforeProgram.map((item,i)=>{
      return item.id;
    }).indexOf(el.id);
    if( before===i ){
      return el;
    }
  })
  return function(dispatch){
    dispatch({type:"POPUP_FORM_RESULT", program:program });
  }
}
