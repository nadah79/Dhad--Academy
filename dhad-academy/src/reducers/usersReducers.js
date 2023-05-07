import { registration } from "../api/api"

const usersState = {
    login:false,
    loginfail:'',
    registration:'',
    registrationfail:''
}

export default (state = usersState,action) => {
  
switch (action.type) {
    case "loginsuccefully":
        console.log("loginsuccefully")
  return{...state, login:true,loginfail:''}
  case "loginfaild":
  console.log("loginfaild")
  return{...state, loginfail:action.payload}
//   registrationSuccess
case "registrationSuccess":
    console.log("registrationSuccess")
    return{...state,registration :action.payload,registrationfail:''}
        break;
        case "registrationfail":
    console.log("registrationfail")
    return{...state, registrationfail:action.payload}
        break;

    default:
        return state;
        break;
}


}