var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var internSchema = new Schema({
  name: String,
  lastname: String,
  matricula: String,
  semestre: Number,
  email: String,
  linkedin: String,
  area: String,
  pregunta: String,
});

var Interns = mongoose.model('interns', internSchema);

module.exports= Interns;
