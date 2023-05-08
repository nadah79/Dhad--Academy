const mongoose = require('mongoose')
const joi = require('joi')


const addvideose = mongoose.Schema({
    title: {
        type:String,
     
        trim: true,
    
        
    },
    description: {
        type: String,
    
        trim: true,
        lowercase: true
    },
    video: {
        type: String,
        trim: true,
        required: [true, 'the video is required field']
    },

},{timestamps:true})


function validateAddvideo (obj){

const schema = joi.object({
title : joi.string().trim().required(),
description :joi.string().trim().min(3).required(),

});
return schema.validate(obj);

}

const addVideose = mongoose.model('addVideose', addvideose)
module.exports = {addVideose,validateAddvideo}