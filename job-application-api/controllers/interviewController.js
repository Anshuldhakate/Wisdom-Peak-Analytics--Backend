const Interview = require('../models/interviewModel');

exports.scheduleInterview = async (req, res) => {
  try {
    const newInterview = new Interview(req.body);
    await newInterview.save();
    res.status(201).json(newInterview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getInterviewsByApplicantId = async (req, res) => {
  try {
    const interviews = await Interview.find({ applicantId: req.query.applicantId });
    res.status(200).json(interviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
