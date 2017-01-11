var Interns = require('../models/internmodel');
var bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(bodyParser.urlencoded({extended:true}));

  app.post('/api/intern', function(req,res) {
    var newIntern = Interns({
      name: req.body.name,
      lastname: req.body.apellidos,
      matricula: req.body.matricula,
      semestre: req.body.semestre,
      email: req.body.email,
      linkedin: req.body.linkedin,
      area: req.body.area,
      pregunta: req.body.preguntas,
    });
    newIntern.save(function(err) {
      if (err) throw err;
      res.send('Success');
    });
  });
};
