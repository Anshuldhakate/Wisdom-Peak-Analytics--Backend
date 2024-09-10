const Applicant = require('../models/applicantModel');

exports.createApplicant = async (req, res) => {
  try {
    const newApplicant = new Applicant(req.body);
    await newApplicant.save();
    res.status(201).json(newApplicant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getApplicantsByJobId = async (req, res) => {
  try {
    const applicants = await Applicant.find({ jobId: req.query.jobId });
    res.status(200).json(applicants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateApplicantStatus = async (req, res) => {
  try {
    const updatedApplicant = await Applicant.findByIdAndUpdate(
      req.params.applicantId, 
      { status: req.body.status }, 
      { new: true }
    );
    res.status(200).json(updatedApplicant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteApplicant = async (req, res) => {
  try {
    await Applicant.findByIdAndDelete(req.params.applicantId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
