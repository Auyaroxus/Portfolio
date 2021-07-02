const mongoose = require('mongoose');

const projectsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  web_url: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Projects', projectsSchema);
