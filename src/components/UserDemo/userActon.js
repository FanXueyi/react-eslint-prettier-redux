import axios from 'axios'

function requstPOST() {
   return {
      type: 'REQUEST_POST',
      isFetching: true,
   }
}

function receviePostOnSuccess(data) {
   console.log('receviePostOnSuccess', data)
   return {
      type: 'RECEVIE_POST_SUCCESS',
      data,
   }
}

function receviePostOnFail(response) {
   return {
      type: 'RECEVIE_POST_FAIL',
      errorMsg: response.msg,
   }
}

function getUser() {
   return function(dispatch) {
      dispatch(requstPOST())

      return axios
         .get('http://localhost:8080/api/userInfo')
         .then(function(response) {
            console.log('call, the response is', response)
            dispatch(receviePostOnSuccess(response.data))
         })
         .catch(function(error) {
            console.log(error)
            dispatch(receviePostOnFail(error))
         })
   }
}

export default getUser
