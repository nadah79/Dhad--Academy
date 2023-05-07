// router.get('/',(req,res) => {
//     try {
  
  
//       fs.unlink(path.join(__dirname,'../images/startup-g3174bf914_1920.jpg'), (err => {
//         if (err) console.log(err);
//         else {
//           console.log("Deleted file: example_file.txt");
//         }
//       }));
  
  
//   } catch (error) {
//       console.log(error)
//   }
//   })


// const {phone} = require('phone');


// console.log( phone('+20 01082057733').isValid);




// const express = require('express');

// const app = express();
  
// app.get('/' , (req , res) => {
//     res.send("<h1>GeeksForGeeks</h1>");
// });
  
// app.listen(4000 , () => {
//     console.log("Server running on port 4000");
// });





// const passport = require('passport');
// const cookieSession = require('cookie-session');
// require('./passport');

// app.use(cookieSession({
// 	name: 'google-auth-session',
// 	keys: ['key1', 'key2']
// }));
// app.use(passport.initialize());
// app.use(passport.session());
	

// app.get('/', (req, res) => {
// 	res.send("<button><a href='/auth'>Login With Google</a></button>")
// });

// // Auth
// app.get('/auth' , passport.authenticate('google', { scope:
// 	[ 'email', 'profile' ]
// }));

// // Auth Callback
// app.get( '/auth/callback',
// 	passport.authenticate( 'google', {
// 		successRedirect: '/auth/callback/success',
// 		failureRedirect: '/auth/callback/failure'
// }));

// // Success
// app.get('/auth/callback/success' , (req , res) => {
// 	if(!req.user)
// 		res.redirect('/auth/callback/failure');
// 	res.send("Welcome " + req.user.email);
// });

// // failure
// app.get('/auth/callback/failure' , (req , res) => {
// 	res.send("Error");
// })

// app.listen(4000 , () => {
// 	console.log("Server Running on port 4000");
// });

// console.log(phone('+2012789546'))

// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const app = express();
// app.use(cors())
// app.use(express.json({limit:'200mb'}))
// app.use(express.urlencoded({extended:true,limit:'200mb'}))
// // app.use("/",(req,res) => {
// //   console.log("mmmmmmmmmmmmmm")
// // })
// // Set storage engine for multer

// // Handle registration form submission
// // app.post('/register', (req, res) => {

  // //   upload(req, res, (err) => {
    // //     if (err) {
      // //       res.status(400).json({ message: 'Error uploading image' });
// //     } else {
// //       const { username, email, password } = req.body;
// //       const imagePath = req.file.path;
// //       // Do something with the registration data and image path
// //       res.status(200).json({ message: 'Registration successful' });
// //     }
// //   });
// // });

// app.listen(4000, () => {
//   console.log('Server listening on port 5000');
// });



// const express = require('express');
// const app = express();
// const multer = require('multer');
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname,'./images'));
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// // Initialize multer upload
// const upload = multer({ storage: storage });



// app.post('/upload', upload.single('image'), (req, res) => {
//   res.send('File uploaded successfully!');
// });

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// })

// const express = require('express');
// const path = require('path');
// const app = express();
// const fs = require('fs')
// const cors = require('cors');

// // Set up a route to serve the video file
// app.get('/video', (req, res) => {
//   const videoPath ="D:\\githup\\dahd\\dhad-academy\\server\\images\\197 Section Intro.mp4"
//   const range = req.headers.range;
//   const videoSize = fs.statSync(videoPath).size;
//   const CHUNK_SIZE = 10 ** 6; // 1MB

//   if (range) {
//     const parts = range.replace(/bytes=/, '').split('-');
//     const start = parseInt(parts[0], 10);
//     const end = parts[1] ? parseInt(parts[1], 10) : videoSize - 1;
//     const contentLength = end - start + 1;
//     const headers = {
//       'Content-Range': `bytes ${start}-${end}/${videoSize}`,
//       'Accept-Ranges': 'bytes',
//       'Content-Length': contentLength,
//       'Content-Type': 'video/mp4',
//       'Access-Control-Allow-Origin': '*',
//     };
//     res.writeHead(206, headers);
//     const videoStream = fs.createReadStream(videoPath, { start, end });
//     videoStream.pipe(res);
//   } else {
//     const headers = {
//       'Content-Length': videoSize,
//       'Content-Type': 'video/mp4',
//       'Access-Control-Allow-Origin': 'example.com',
//     };
//     res.writeHead(200, headers);
//     const videoStream = fs.createReadStream(videoPath);
//     videoStream.pipe(res);
//   }
// });

// app.listen(5000, () => {
//   console.log('Server running on port 5000');
// });


////////////
const express = require('express');
const multer = require('multer');
const { addCourse, validateaddcourse } = require('./courseSchema');
const { ObjectId } = require('mongodb');
const { GridFsStorage } = require('multer-gridfs-storage');
const mongoose = require('mongoose');
const path = require('path');
const crypto = require('crypto');
const { Grid } = require('gridfs-stream');
const { lessonSchema } = require('./courseSchema');

const router = express.Router();

// Set up GridFS storage engine
const storage = new GridFsStorage({
  url: process.env.MONGODB_URI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({ storage });

// Set up MongoDB connection
const conn = mongoose.createConnection(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

let gfs;

// conn.once('open', () => {
//   // Init stream
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection('uploads');
// });

// Create a new course
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { error } = validateaddcourse(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const course = new addCourse({
      title: req.body.title,
      lessons: req.body.lessons || [],
      image: req.file ? req.file.filename : '',
      courseName: req.body.courseName,
      coursesDepartment: req.body.coursesDepartment,
      price: req.body.price,
      hours: req.body.hours,
    });

    await course.save();

    res.send(course);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await addCourse.find();
    res.send(courses);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// Get a course by ID
router.get('/:id', async (req, res) => {
  try {
    const course = await addCourse.findById(req.params.id);
    if (!course) {
      return res.status(404).send('Course not found');
    }
    res.send(course);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).send('Course not found');
    }
    res.status(500).send('Server Error');
  }
});

// Update a course by ID
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { error } = validateaddcourse(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const course = await addCourse.findById(req.params.id);
    if (!course) {
      return res.status(404).send('Course not found');
    }

    course.title = req.body.title;
    course.lessons = req.body.lessons || course.lessons;
    course.image = req.file ? req.file.filename : course.image;
    course.courseName = req.body.courseName;
    course.coursesDepartment = req.body.coursesDepartment;
    course.price = req.body.price;
    course.hours = req.body.hours;

    await course.save();

    res.send(course);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).send('Course not found');
    }
    res.status(500).send('Server Error');
  }
});

// Delete a course by ID
router.delete('/:id', async (req, res) => {
  try {
    const course = await addCourse.findById(req.params.id);
    if (!course) {
      return res.status(404).send('Course not found');
    }

    await addCourse.findByIdAndRemove(req.params.id);

    res.send('Course deleted successfully');
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).send('Course not found');
    }
    res.status(500).send('Server Error');
  }
});

// Add a new lesson to a course
router.post('/:id/lessons', upload.single('pdf'), async (req, res) => {
  try {
    const course = await addCourse.findById(req.params.id);
    if (!course) {
      return res.status(404).send('Course not found');
    }

    const lesson = {
      name: req.body.name,
      pdf: req.file ? req.file.filename : '',
      video: req.body.video,
      meeting: req.body.meeting,
    };

    course.lessons.push(lesson);

    await course.save();

    res.send(course);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).send('Course not found');
    }
    res.status(500).send('Server Error');
  }
});

// Get all lessons for a course
router.get('/:id/lessons', async (req, res) => {
  try {
    const course = await addCourse.findById(req.params.id);
    if (!course) {
      return res.status(404).send('Course not found');
    }

    res.send(course.lessons);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).send('Course not found');
    }
    res.status(500).send('Server Error');
  }
});

// Get a lesson by ID for a course
router.get('/:courseId/lessons/:lessonId', async (req, res) => {
  try {
    const course = await addCourse.findById(req.params.courseId);
    if (!course) {
      return res.status(404).send('Course not found');
    }

    const lesson = course.lessons.(req.params.lessonId);
    if (!lesson) {
      return res.status(404).send('Lesson not found');
    }

    res.send(lesson);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).send('Course or lesson not found');
    }
    res.status(500).send('Server Error');
  }
});

// Update a lesson by ID for a course
router.put('/:courseId/lessons/:lessonId', upload.single('pdf'), async (req, res) => {
  try {
    const course = await addCourse.findById(req.params.courseId);
    if (!course) {
      return res.status(404).send('Course not found');
    }

    const lesson = course.lessons.id(req.params.lessonId);
    if (!lesson) {
      return res.status(404).send('Lesson not found');
    }

    lesson.name = req.body.name || lesson.name;
    lesson.pdf = req.file ? req.file.filename : lesson.pdf;
    lesson.video = req.body.video || lesson.video;
    lesson.meeting = req.body.meeting || lesson.meeting;

    await course.save();

    res.send(course);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).send('Course or lesson not found');
    }
    res.status(500).send('Server Error');
  }
});

// Delete a lesson by ID for a course
router.delete('/:courseId/lessons/:lessonId', async (req, res) => {
  try {
    const course = await addCourse.findById(req.params.courseId);
    if (!course) {
      return res.status(404).send('Course not found');
    }

    const lesson = course.lessons.id(req.params.lessonId);
    if (!lesson) {
      return res.status(404).send('Lesson not found');
    }

    lesson.remove();

    await course.save();

    res.send(course);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).send('Course or lesson not found');
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;