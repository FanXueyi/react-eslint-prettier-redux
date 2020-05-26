import * as counterConstant from './counterConstant'

export const ADD_NUMBER = number => {
   return {
      type: counterConstant.ADD_NUMBER,
      number,
   }
}

export const REDUCE_NUMBER = number => {
   return {
      type: counterConstant.REDUCE_NUMBER,
      number,
   }
}
