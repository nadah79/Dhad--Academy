import { combineReducers } from "redux";
import {   applyMiddleware,compose, createStore } from 'redux';
import thunk from "redux-thunk"

import teacher from "./teachersReducer.js";
import addblog from "./addBlogReducer.js";
import users from "./usersReducers.js";



  const reducers =combineReducers({teacher,addblog,users})
const store = createStore( reducers, applyMiddleware(compose(thunk)),      
)
 
export default store