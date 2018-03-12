import axios                              from 'axios';

export function mainNav(){
  return function(dispatch){
    axios.get('../json/mainNav.json').then((data)=>{
      dispatch({ type:"MAIN_NAV", data: data.data[0].nav })
    })
  }
}

export function subNav(main){
  return function(dispatch){
    axios.get('../json/mainNav.json').then((data)=>{
      data.data[0].nav.map((item,i)=>{
        if(item.main==main){
          dispatch({ type:"SUB_NAV", sub: item.sub })
        }
      })
    })
  }
}
