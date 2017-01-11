var configValues = require('./config.json');

module.exports = {
  getDbConnectionString: function() {
    return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds161008.mlab.com:61008/interns';
  }
}
