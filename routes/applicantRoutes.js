const express = require('express');
const { createApplicant, getApplicantsByJobId, updateApplicantStatus, deleteApplicant } = require('../controllers/applicantController');
const router = express.Router();

router.post('/applicants', createApplicant);
router.get('/applicants', getApplicantsByJobId);
router.patch('/applicants/:applicantId', updateApplicantStatus);
router.delete('/applicants/:applicantId', deleteApplicant);

module.exports = router;
