// Application Schema - stores user job applications
const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  job: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
  resumeUrl: String,
  coverLetter: String,
  status: { type: String, default: "submitted" },
  appliedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Application", ApplicationSchema);
