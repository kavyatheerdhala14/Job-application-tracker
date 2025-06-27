const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  company: String,
  position: String,
  status: String,
  appliedDate: Date
});

module.exports = mongoose.model('Job', jobSchema);
