const mongoose = require('mongoose')
const validator = require('validator')
const joi = require('joi')
var jwt = require('jsonwebtoken');

const addBlogModel = mongoose.Schema({
    title: {
        type:String,
        required:[true,"enter your name please"],
        trim: true,
        
    },
    titleAR: {
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
    descriptionAR: {
        type: String,
        trim: true,
        required: [true, 'the discriptionAR is required field']
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
    title : joi.string().trim().required(),
    titleAR : joi.string().trim().required(),
    description :joi.string().trim().required(),
    descriptionAR :joi.string().trim().required(),

});
return schema.validate(obj);

}









const addBlog = mongoose.model('addBlog', addBlogModel)
module.exports = {addBlog,validateaddBlog}