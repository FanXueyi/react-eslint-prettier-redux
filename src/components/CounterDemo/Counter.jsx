import React from 'react'
import { createStore, combineReducers, bindActionCreators } from 'redux'
import * as counterConstant from './counterConstant'
import CounterReducer from './counterReducer'
import * as counterAction from './counterAction'

const rootReducer = combineReducers({
   CounterReducer,
})
const store = createStore(rootReducer)
const bindAction = bindActionCreators(counterAction, store.dispatch)

class Counter extends React.Component {
   constructor(props) {
      super(props)

      this.state = {
         number: 0,
         result: 0,
      }
   }

   changeNumber = e => {
      this.setState({
         number: e.target.value,
      })
   }

   getResult = actionType => {
      if (counterConstant.ADD_NUMBER === actionType) {
         // store.dispatch(counterAction.ADD_NUMBER(this.state.number))
         bindAction.ADD_NUMBER(this.state.number)
      }

      if (counterConstant.REDUCE_NUMBER === actionType) {
         // store.dispatch(counterAction.REDUCE_NUMBER(this.state.number))
         bindAction.REDUCE_NUMBER(this.state.number)
      }
   }

   componentDidMount() {
      store.subscribe(() => {
         this.setState({
            result: store.getState().CounterReducer.result,
         })
      })
   }

   render() {
      return (
         <div>
            <p>this current result is:{this.state.result}</p>

            <div>
               <input
                  type="text"
                  value={this.state.number}
                  onChange={this.changeNumber}
               />
               <button
                  type="button"
                  onClick={this.getResult.bind(
                     this,
                     counterConstant.ADD_NUMBER,
                  )}
               >
                  +
               </button>
               <button
                  type="button"
                  onClick={this.getResult.bind(
                     this,
                     counterConstant.REDUCE_NUMBER,
                  )}
               >
                  -
               </button>
            </div>
         </div>
      )
   }
}

export default Counter
