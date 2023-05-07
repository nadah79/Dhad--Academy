require('../db/connectionDB')
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const { body, validationResult } = require('express-validator');
const express = require('express');
const app = express();
const xss = require('xss-clean');

// Set up xss-clean middleware
// app.use(xss());
// // Set up security middleware
// // app.use(helmet());
helmet({
    crossOriginResourcePolicy: false,
  })
// app.use(express.static('public'));
app.use(
  rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 500, // limit each IP to 100 requests per windowMs
  })
);
app.use(mongoSanitize());

// Set up body parser middleware
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ extended: true, limit: '200mb' }));

// Set up CORS middleware
app.use(cors());

// Serve static images
app.use(express.static(path.join(__dirname, '../images')));
// app.use(express.static(path.join(__dirname, '../uploads')));


// Set up routes
const userRout = require('../routing/usersRouting');
const videoRout = require('../routing/addVideoRouting');
const courseRout = require('../routing/addCourseRouting');
const conatctRout = require('../routing/contactRout');
const blogRout = require('../routing/blogandCommentRouting');
const sliderRoute = require('../routing/sliderRouting');


app.use('/userRegistration', userRout);
app.use('/blog', blogRout);
app.use('/video', videoRout);
app.use('/course', courseRout);
app.use('/contact', conatctRout);
app.use('/slider', sliderRoute);


// Set up input validation middleware using express-validator
// app.post(
//   '/userRegistration',
//   body('email').isEmail().normalizeEmail(),
//   body('password').isLength({ min: 6 }),
//   (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(422).json({ errors: errors.array() });
//     }
//     next();
//   }
// );

module.exports = app;
