const initState = {
   result: 0,
}

const counter = (state = initState, action) => {
   switch (action.type) {
      case 'ADD_NUMBER':
         return Object.assign({}, state, {
            result: state.result + parseInt(action.number),
         })
      case 'REDUCE_NUMBER':
         return {
            ...state,
            result: state.result - parseInt(action.number),
         }

      default:
         return state
   }
}

export default counter
