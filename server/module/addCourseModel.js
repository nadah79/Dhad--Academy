const mongoose = require('mongoose')
const validator = require('validator')
const joi = require('joi')
var jwt = require('jsonwebtoken');


const lessonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pdf: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  meeting: {
    type: String,
    required: true,
  },
  course_id:{type:String,
    trim: true,
    lowercase: true
  }
});

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  lessons: [lessonSchema],
  image: {
    type: String,
    trim: true,
    default: ''
  },
  courseName: {
    type: String,
    required: [true, 'the courseName is required field'],
    trim: true,
    lowercase: true
  },
  coursesDepartment: {
    type: String,
    enum: ['arabic', 'quran and readings', 'islamic studies', 'qualifying courses', 'crafts and skills', 'field tourism'],
    required: [true, 'the coursedepartment is required field'],
    trim: true,
    lowercase: true
  },
  price: {
    type: String,
    required: [true, 'the price is required field'],
    trim: true,
    lowercase: true
  },
  hours: {
    type: String,
    required: [true, 'the price is required field'],
    trim: true,
    lowercase: true
  },
}, { timestamps: true })


function validateaddcourse (obj){

const schema = joi.object({
coursesDepartment : joi.string().trim().required(),
courseName :joi.string().trim().min(15).required(),
title :joi.string().trim().required(),
price :joi.string().trim().required(),
hours :joi.string().trim().required(),


});
return schema.validate(obj);

}



const addCourse = mongoose.model('addCourse', courseSchema)
module.exports = {addCourse,validateaddcourse}