// Application Routes: Apply and View
const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Application = require("../models/Application");
const Job = require("../models/Job");
const auth = require("../middleware/auth");
const router = express.Router();

// Create upload folder if not exists
const uploadDir = path.join(__dirname, "../../uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Configure Multer
const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// Apply for a job (with resume upload)
router.post("/:jobId", auth, upload.single("resume"), async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });

    const resumeUrl = `${process.env.BASE_URL}/uploads/${req.file.filename}`;
    const application = new Application({
      user: req.user._id,
      job: job._id,
      resumeUrl,
      coverLetter: req.body.coverLetter,
    });
    await application.save();

    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

// View my applications
router.get("/my", auth, async (req, res) => {
  const apps = await Application.find({ user: req.user._id }).populate("job");
  res.json(apps);
});

module.exports = router;
