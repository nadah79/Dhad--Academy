const mongoose = require('mongoose');

const enrollmentRequestSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'addCourse',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
  },
  adminNotes: {
    type: String
  }
}, { timestamps: true });

const EnrollmentRequest = mongoose.model('EnrollmentRequest', enrollmentRequestSchema);

module.exports = EnrollmentRequest;