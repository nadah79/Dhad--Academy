const express=require('express')
const multer = require('multer')
const path =require('path')

const Response = (res,statuscode,message,body,error) => {
  return  res.status(statuscode).json({statuscode,message,body,error})
 
}


module.exports= Response;


