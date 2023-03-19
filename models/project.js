const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  slovakDescription: { type: String, required: false },
  type: { 
    type: String, 
    enum: ['Visualisation', 'Architecture', 'Design'], 
    required: true 
  },
  images: [{type: String}]
});

projectSchema.index({ type: 1 }); 

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;

