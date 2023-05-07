const blogs = {
    blogs:"",
    getallblogs:[],
}

export default (state = blogs,action) => {
  
switch (action.type) {
    case 'getallblogs':
        console.log("getallblogs")
  return{ ...state,getallblogs:action.payload}
    case 'wait for upload':
        console.log("wait for upload")
  return{ ...state,blogs:"please wait to complete create"}
    case 'add blod successefully':
        console.log(action.payload.body)
    //   state.getallblogs.push(action.payload.body.postBlog)
  return{ ...state,blogs:action.payload.message}
  case 'error':
    console.log("error")
return{ ...state,blogs:action.payload}
        break;

    default:
        return state;
        break;
}


}