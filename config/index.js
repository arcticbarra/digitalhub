module.exports = {
  getDbConnectionString: function() {
    return process.env.MONGODB_URI;
  }
};
