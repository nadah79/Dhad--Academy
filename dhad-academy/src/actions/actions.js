import * as api from "../api/api"
import React from 'react'
import { redirect, useNavigate } from 'react-router-dom';


const getALLcontact = ()=>async(dispatch)=>{

    // console.log("home")
    await api.getcontact().then((element)=>element.json().then((data)=>{
      const {body} = data
    //   const {message} = data
    // console.log(body.getContact)
      console.log(body)
      if(body.getContact){
    
        dispatch({type:'getAllTeacher',payload:body.getContact})
      }
      else{
        // console.log(message   )
      }
      
    })).catch((er)=>console.log(er))
    
    }




    const registrationaction = (body)=>async(dispatch)=>{

      console.log(body)
      try {
        
        await api.registration(body) .then((response) => response.json())
     .then((data) => {
       console.log(data);
       if (data.statuscode==201) {
        dispatch({type:'registrationSuccess',payload:data.message})
       }
       if (data.statuscode==400) {
        console.log(data)
        
        dispatch({type:'registrationfail',payload:data.error})
       }
     })
      } catch (error) {
        
      }
        // const {body} = data

        // if(body.getContact){
      
        //   dispatch({type:'getAllTeacher',payload:body.getContact})
        // }
        // else{
        //   // console.log(message   )
        // }
        
      
      }


      
  //   const loginaction = (body)=>async(dispatch)=>{

    
  //     try {
  // // const nav = useNavigate()
        
  //       await api.loginapi(body) .then((response) => response.json())
  //    .then((data) => {
  //     console.log(data.body)
  //     if(data.statuscode==400){
        
  //          dispatch({type:'loginfaild',payload:data.message})
  //     }
  //     if(data.statuscode==200){
  // redirect('/')
        
  //       dispatch({type:'loginsuccefully',payload:data.message})
  //       localStorage.setItem("token",JSON.stringify( data.body))  

  //  }
    
      

          
  //      console.log(data.statuscode==400)
  //    })
  //     } catch (error) {
  //       console.log(error)
  //     }
        // const {body} = data

        // if(body.getContact){
      
        //   dispatch({type:'getAllTeacher',payload:body.getContact})
        // }
        // else{
        //   // console.log(message   )
        // }
        
      
      // }









      const addblogAction = (body)=>async(dispatch)=>{

        console.log(body)
        try {
          
          await api.addblogapi(body) .then((response) => console.log(response))
//        .then((data) => {
         
   
// console.log(data)
//         if(data.body){
//           dispatch({type:'add blod successefully',payload:data})
//         }
//         if(data.error)
//         dispatch({type:'error' ,payload:data.error})
//        }
.catch((error)=>  dispatch({type:'error' ,payload:error.message}))
        } catch (error) {
          
        }
   
        }













        const getallblogs = ()=>async(dispatch)=>{

        
          try {
            
            await api.getallplogs() .then((response) => response.json())
         .then((data) => {
           
     

          if(data.body){
            dispatch({type:'getallblogs',payload:data.body})
          }
          if(data.error)
          dispatch({type:'error' ,payload:data.error})
         }).catch((error)=>  dispatch({type:'error' ,payload:error.message}))
          } catch (error) {
            
          }
     
          }
  



export default {getALLcontact,registrationaction,addblogAction,getallblogs};
