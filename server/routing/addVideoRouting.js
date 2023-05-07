const router=require('express').Router()
const admin = require('../controller/adminaddvedioandcourseController')
const multer = require('multer')
const path =require('path')
const fs = require('fs')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../images'))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    },
}
  );
  
  var upload = multer({ storage: storage }).single('video');

  router.post('/addVideo',upload,admin.addvideo)
  router.get('/getVideo',admin.getallvideo)
router.delete('/deleteVideo',admin.deletevideo)


















    




module.exports=router




















