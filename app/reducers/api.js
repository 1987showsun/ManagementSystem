export default function api(
  state={
    leaveCategory : [],
    leaveList     : [],
    formStatus    : [],
    searchMember  : [],
    leaveDetailed : [],
    posStore      : [],
    posStoreBranch: [],
    posStoreMenu  : [],
    posTask       : [],
  },action){
  switch( action.type ){
    case 'LEAVE_CATEGORY':
      state = { ...state, leaveCategory: action.leaveCategory }
      break;

    case 'LEAVE_LIST':
      state = { ...state, leaveList: action.leaveList }
      break;

    case 'FORM_SCHEDULE_STATUS':
      state = { ...state, formStatus: action.formStatus }
      break;

    case 'SEARCH_MEMBER':
      state = { ...state, searchMember: action.searchMember }
      break;

    case 'LEAVE_DETAILED':
      state = { ...state, leaveDetailed: action.leaveDetailed }
      break;

    case 'POS_STORE':
      state = { ...state, posStore: action.store }
      break;

    case 'POS_STORE_BRANCH':
      state = { ...state, posStoreBranch: action.branch }
      break;

    case 'POS_STORE_MENU':
      state = { ...state, posStoreMenu: action.menu }
      break;

    case 'POS_GET_TASK':
      state = { ...state, posTask: action.task }
      break;

  }
  return state;
}
