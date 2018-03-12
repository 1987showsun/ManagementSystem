import axios                              from 'axios';

export function selectApi(){
  return function(dispatch){
    axios.get('http://localhost:5000/api/leave/select').then((data)=>{
      dispatch({ type:"LEAVE_CATEGORY", leaveCategory: data.data.data[0]['leave']['category']})
    });
  }
}

export function leaveListApi(status){
  let result         = [];
  let leaveListData  = [];
  let leaveCategory  = [];
  return function(dispatch){
    axios.get('http://localhost:5000/api/leave/select').then((leaveSelectData)=>{
      leaveCategory = leaveSelectData.data.data[0]['leave']['category'];
      axios.get('http://localhost:5000/api/leave/list').then((data)=>{
        leaveListData = data.data.data;
        leaveListData.map((item,i,array)=>{
          leaveCategory.map((itemCategory,i)=>{
            if(item.category==itemCategory.no){
              item.category = itemCategory.name_cn;
            }
          })
          status[0]['leave'].map((item2)=>{
            if( item.status==item2.no ){
              item.status = item2.name_cn;
            }
          })
        })
        for(let i=leaveListData.length-1 ; i>=0 ; i--){
          result[leaveListData.length-i] = leaveListData[i];
        }
        dispatch({ type:"LEAVE_LIST", leaveList: result});
      });
    })
  }
}

export function leaveDetailed(match,leaveCategory){
  let _id            = match.params.id,
      _leaveDetailed = [];

  return function(dispatch){
    axios.get('http://localhost:5000/api/leave/detailed/'+_id).then((leaveDetailed)=>{

      _leaveDetailed = leaveDetailed.data.data[0];
      leaveCategory.map((item,i)=>{
        if( item.no == _leaveDetailed.category ){
          _leaveDetailed['category'] = item.name_cn
        }
      })

      dispatch({ type:"LEAVE_DETAILED", leaveDetailed: _leaveDetailed });
    })
  }
}

export function searchAgent(name){
  return function(dispatch){
    axios.get('http://localhost:5000/api/searchMember/'+name).then((member)=>{
      dispatch({ type:"SEARCH_MEMBER", searchMember: member.data.data});
    })
  }
}

export function POSStore(name){
  return function(dispatch){
    axios.get('http://localhost:5000/api/pos/getStore').then((store)=>{
      dispatch({ type:"POS_STORE", store: store.data.data});
    })
  }
}

export function POSStoreBranch(id){
  return function(dispatch){
    axios.get('http://localhost:5000/api/pos/getStore/'+id).then((store)=>{
      dispatch({ type:"POS_STORE_BRANCH", branch: store.data.data});
    })
  }
}

export function POSStoreMenu(id){
  return function(dispatch){
    axios.get('http://localhost:5000/api/pos/getStoreMenu/'+id).then((menu)=>{
      dispatch({ type:"POS_STORE_MENU", menu: menu.data.data});
    })
  }
}

export function POSTask(){
  return function(dispatch){
    axios.get('http://localhost:5000/api/pos/task/').then((task)=>{
      dispatch({ type:"POS_GET_TASK", task: task.data.data});
    })
  }
}
