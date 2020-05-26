import React from 'react'
import './App.css'
// import Counter from './components/CounterDemo/Counter'
import User from './components/UserDemo/userComponent'
import { Provider } from 'react-redux'
import store from './store'

function App() {
   return (
      <Provider store={store}>
         <div className="App">
            {/* <Counter /> */}
            <User />
         </div>
      </Provider>
   )
}

export default App
