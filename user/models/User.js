// const mongoose = require('mongoose');

// const studentSchema = new mongoose.Schema({
//   studentId: { type: String, required: true, unique: true },
//   name: { type: String, required: true },
// });

// module.exports = mongoose.model('Student', studentSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  username: { type: String, required: true },
  userEmail: { type: String, required: true, unique: true },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
