import { RECV_DATA, REQ_DATA, REQ_ERROR } from '../actions/Types'


let intialStae = {isFetch:false, datas:[],error:false}
export default function(state = intialStae, action) {
  switch (action.type) {
    case RECV_DATA:
        return {isFetch:false, datas:action.payload,error:false}
    case REQ_DATA:
        return {isFetch:true, datas:[],error:false}
    case REQ_ERROR:
        return {isFetch:false, datas:[{"username":"firstUser","Fname":"FirstNameUF","Lnmae":"LastNameUF","EmailId":"emailid@gamil.comUF","phoneno":8723462},{"username":"UsernameSD","Fname":"FirstnameSD","Lnmae":"LastnamSD","EmailId":"emailid@gmail.comSD","phoneno":8723462},{"username":"ESFWFEWSERW","Fname":"EWFRWERFETER","Lnmae":"RGERERGESDF","Emailid":"dRGER@DGRE.R","phoneno":8723462}],error:true}
    default:
     return state

  }

}
