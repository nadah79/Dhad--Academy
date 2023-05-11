const router=require('express').Router();
const auth=require("../midleware/authentication");
const slider = require('../controller/sliderController');
const multer = require('multer');
const path =require('path');
const fs = require('fs');




var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'../images'))
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
 
  },
}
);

var upload = multer({ storage: storage }).single('image');

router.post('/', auth.isAdmin, upload,slider.postslider);
router.get('/',slider.getallfiles);
router.get('/:id',slider.getspacificfiles);
router.delete('/:id',auth.isAdmin,slider.deleteFiles);




module.exports=router