import { RECV_DATA, REQ_DATA, REQ_ERROR } from '../actions/Types'
import axios from 'axios'


export function fetch() {
 return dispatch => {

    axios.get('http://demo7892030.mockable.io/hari')
    .then(responce => dispatch({type: RECV_DATA,payload: responce.data}),
    err => dispatch({type: REQ_ERROR,payload:err})
  )
   
  }

}

