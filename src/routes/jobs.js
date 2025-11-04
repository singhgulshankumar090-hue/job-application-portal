// Job Routes: View and Add jobs
const express = require("express");
const Job = require("../models/Job");
const router = express.Router();

// Get all jobs
router.get("/", async (req, res) => {
  const jobs = await Job.find().sort({ createdAt: -1 });
  res.json(jobs);
});

// Add a new job (for seeding or admin use)
router.post("/", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.status(201).json(job);
});

module.exports = router;
