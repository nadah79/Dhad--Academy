const mongoose = require('mongoose')
const joi = require('joi')


const addvideose = mongoose.Schema({
    title: {
        type:String,
        required:[true,"enter your name please"],
        trim: true,
        
    },
    description: {
        type: String,
        required:[true,"the discription is required field"],
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
description :joi.string().trim().required(),

});
return schema.validate(obj);

}

const addVideose = mongoose.model('addVideose', addvideose)
module.exports = {addVideose,validateAddvideo}