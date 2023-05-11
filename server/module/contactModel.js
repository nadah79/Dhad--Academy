const mongoose = require('mongoose')
const joi = require('joi')


const contact = mongoose.Schema({
    name: {
        type:String,
        required:[true,"enter your name please"],
        trim: true,
        lowercase: true

        
    },
    phonenumber: {
        type: String,
        required:[true,"the phonenumber is required field"],
        trim: true,
      
        lowercase: true
    },
    subject: {
        type: String,
        trim: true,
        required: [true, 'the subject is required field']
    },
    message: {
        type: String,
        trim: true,
        required: [true, 'the message is required field']
    },

},{timestamps:true})


function validatecontact(obj){

const schema = joi.object({
name : joi.string().trim().required(),
subject : joi.string().trim().required(),
message : joi.string().trim().required(),
phonenumber :joi.string().trim().required(),

});
return schema.validate(obj);

}

const contactModel = mongoose.model('contactModel', contact)
module.exports = {contactModel,validatecontact}