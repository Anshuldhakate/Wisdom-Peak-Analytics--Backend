const mongoose = require('mongoose');

const ApplicantSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  resumeLink: { type: String, required: true },
  status: {
    type: String,
    enum: ['Pending', 'Interviewed', 'Rejected', 'Hired'],
    default: 'Pending',
  },
});

module.exports = mongoose.model('Applicant', ApplicantSchema);
