const mongoose = require('mongoose')
const validator = require('validator')
const joi = require('joi')
var jwt = require('jsonwebtoken');

const addBlogModel = mongoose.Schema({
    title: {
        type:String,
        required:[true,"enter your name please"],
        trim: true,
        minLength:10,
        maxLength:200,
        
    },
    description: {
        type: String,
        required:[true,"the discription is required field"],
        trim: true,
        lowercase: true
    },
    details: {
        type: String,
        trim: true,
        required: [true, 'add details ']
    },
    image: {
        type: String,
        trim: true,
        default:''
    },


},{timestamps:true,
toJSON:{virtuals:true},
toObject:{virtuals:true},
}
);
addBlogModel.virtual('comment',{
    ref:'addcomment',
    foreignField :"blogId",
    localField:"_id"
})

function validateaddBlog (obj){

const schema = joi.object({
title : joi.string().trim().min(10).max(200).required(),
description :joi.string().trim().min(15).required(),
details :joi.string().trim().min(15).required(),

});
return schema.validate(obj);

}









const addBlog = mongoose.model('addBlog', addBlogModel)
module.exports = {addBlog,validateaddBlog}