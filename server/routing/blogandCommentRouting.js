const router=require('express').Router();
const auth=require("../midleware/authentication");
const blog = require('../controller/addBlogController');
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


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname,'../images'));
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// // Initialize multer upload with two files
// const upload = multer({
//   storage: storage,
//   fileFilter: function (req, file, cb) {
//     if (file.fieldname === 'image1' || file.fieldname === 'image2') {
//       cb(null, true);
//     } else {
//       cb(new Error('Invalid file field name'), false);
//     }
//   },
//   limits: {
//     fileSize: 1024 * 1024 * 5 // 5 MB
//   }
// }).fields([
//   { name: 'image1', maxCount: 1 },
//   { name: 'image2', maxCount: 1 }
// ]);

// Example route that uploads two images
router.post('/addblog',auth.isAdmin, upload
,blog.postblog);

router.post('/comment/:id',auth.isUser, blog.comment);
router.get('/', blog.getblog);
router.get('/:id', blog.getoneblog);

router.delete('/:id',auth.isAdmin, blog.deleteplog);


module.exports = router;
