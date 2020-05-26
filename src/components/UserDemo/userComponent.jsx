import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import userAction from './userActon'

class User extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         isFetching: false,
         data: [
            {
               userName: 'xiaoming',
               age: 18,
            },
            {
               userName: 'mingming',
               age: 18,
            },
         ],
         errorMsg: '',
      }
   }

   getDate = () => {
      // console.log(this.props)

      this.props.userAction()
   }

   render() {
      const { isFetching, data } = this.props.user
      const mapData =
         data != null &&
         data.map((value, key) => {
            return <p key={key}>{value.userName} </p>
         })
      return (
         <div>
            <button onClick={this.getDate}>Request Data</button>
            {isFetching && <p>is getting data</p>}
            {data != null && <div>{mapData}</div>}
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      user: state,
   }
}

const mapDispatchToProps = dispatch => {
   return {
      userAction: bindActionCreators(userAction, dispatch),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
