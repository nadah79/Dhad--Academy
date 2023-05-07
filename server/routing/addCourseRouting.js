const router=require('express').Router()
const admin = require('../controller/adminaddvedioandcourseController')
const multer = require('multer')
const path =require('path')
const fs = require('fs')
const auth=require("../midleware/authentication");


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




// (req, res, next) => {
//   upload(req, res, function (err) {
//     if (err instanceof multer.MulterError) {
//       // A Multer error occurred when uploading.
//     return  res.status(400).json({ message: 'File upload error' });
//     } else if (err) {
//       // An unknown error occurred when uploading.
//       return res.status(500).json({ message: 'Server error' });
//     } else {
//       // Everything went fine.
//       next();
//     }

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'../images'));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
  
  var upload = multer({ storage: storage }).single('image');

router.post('/addCourse', upload,admin.addCourse)
router.post('/:id/lessons', upload,admin.addlesson)
router.delete('/:courseId/lessons/:lessonId',admin.deletelessons)

router.get('/getCourse',admin.getallCourse)
router.put('/updateCourse/:id',upload,admin.updateCourse)
router.delete('/deleteCourse/:id',admin.deleteCourse)



module.exports=router
