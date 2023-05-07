const teacherstate = {
    teachers:[],
    lessons:[],

}

export default (state = teacherstate,action) => {
  
switch (action.type) {
    case "getAllTeacher":
        // console.log("redux")
  return{...state, teachers:action.payload}
        
        break;
        case "getalllessons":
            console.log("redux")
      return{...state, lessons:action.payload}

    default:
        return state;
        break;
}


}