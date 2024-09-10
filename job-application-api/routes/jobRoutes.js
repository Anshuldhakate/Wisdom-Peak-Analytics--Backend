const express = require('express');
const { createJob, getAllJobs } = require('../controllers/jobController');
const router = express.Router();

router.post('/jobs', createJob);
router.get('/jobs', getAllJobs);

module.exports = router;
