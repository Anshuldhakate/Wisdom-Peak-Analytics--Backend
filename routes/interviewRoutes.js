const express = require('express');
const { scheduleInterview, getInterviewsByApplicantId } = require('../controllers/interviewController');
const router = express.Router();

router.post('/interviews', scheduleInterview);
router.get('/interviews', getInterviewsByApplicantId);

module.exports = router;
