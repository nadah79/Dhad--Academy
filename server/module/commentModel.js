const mongoose = require('mongoose')
const validator = require('validator')
const joi = require('joi')
var jwt = require('jsonwebtoken');

const commentModel = mongoose.Schema({
    blogId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'addBlog',
        required:true
   
    },
    userid: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
   
    },
    text: {
        type: String,
        required:[true,"the discription is required field"],
        trim: true,
      
    },
    image: {
        type: String,
     
        trim: true,
      
    },
    username: {
        type: String,
        trim: true,
        required: [true, 'add details ']
    },
 

},{timestamps:true})


function validateaddcomment (obj){

const schema = joi.object({
// username : joi.string().trim().min(10).max(60).required(),
text :joi.string().trim().min(3).required(),

});
return schema.validate(obj);

}









const addcomment = mongoose.model('addcomment', commentModel)
module.exports = {addcomment,validateaddcomment}