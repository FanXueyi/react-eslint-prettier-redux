const init = {
   //  isFetching: false,
   //  data: [],
   //  errorMsg: '',
}

function user(state = init, action) {
   switch (action.type) {
      case 'REQUEST_POST':
         return Object.assign({}, state, {
            isFetching: true,
         })
      case 'RECEVIE_POST_SUCCESS':
         return Object.assign({}, state, {
            isFetching: false,
            data: action.data,
         })

      case 'RECEVIE_POST_FAIL':
         return {
            ...state,
            isFetching: false,
            errorMsg: action.errorMsg,
         }
      default:
         return state
   }
}

export default user
