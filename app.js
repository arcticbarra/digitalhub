var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.get('/', function(req, res) {
  res.render('index');
});

var router = express.Router();
app.use('/api/email', router);
router.post('/', form);

function form(req, res) {

    var auth = {
      auth: {
        api_key: 'key-57a716efe753c46354a7e0d06e457600',
        domain: 'sandbox3cf6d76faf354010bcfe38b9b226f26c.mailgun.org'
      }
    };

  var nodemailerMailgun = nodemailer.createTransport(mg(auth));
  nodemailerMailgun.sendMail({
    from: 'internrequest@digitalhub.com',
    to: 'ebarragan1997@gmail.com',
    subject: 'Intern request',
    html: `<strong>Nombre:</strong> ${req.body.name} ${req.body.apellidos}
    <br><strong>Matricula:</strong> ${req.body.matricula}
    <br><strong>Correo:</strong> ${req.body.email}
    <br><strong>Linkedin:</strong> ${req.body.linkedin}
    <br><strong>Área de interés:</strong> ${req.body.area}
    <br><br><strong>¿Por qué quieres trabajar en Digital Hub?:</strong><br>${req.body.preguntas}`,
  }, function (err, info) {
    if (err) {
      console.log('Error: ' + err);
    }
    else {
      console.log('Response: ' + info);
    }
  });
}

app.listen(port);
