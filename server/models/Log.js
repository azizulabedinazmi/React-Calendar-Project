const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  action: String,
  endpoint: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  timestamp: { type: Date, default: Date.now },
  metadata: mongoose.Schema.Types.Mixed
});

module.exports = mongoose.model('Log', logSchema);