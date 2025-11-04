require("dotenv").config();
const connectDB = require("../src/config/db");
const Job = require("../src/models/Job");

const jobs = [
  {
    title: "Frontend Developer",
    company: "Daily Whisper",
    location: "Remote",
    description: "Work on React UI projects.",
  },
  {
    title: "Backend Developer",
    company: "Tech Corp",
    location: "Mumbai",
    description: "Work on Node.js APIs.",
  },
];

(async function () {
  await connectDB();
  await Job.deleteMany({});
  await Job.insertMany(jobs);
  console.log(" Sample jobs added");
  process.exit();
})();
