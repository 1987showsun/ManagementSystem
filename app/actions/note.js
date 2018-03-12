export function note(noteSetUp){
  return function(dispatch){
    dispatch({ type:"NOTE1", setup: noteSetUp  })
  }
}
