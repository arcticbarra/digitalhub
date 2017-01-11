module.exports = {
  getDbConnectionString: function() {
    return process.env.PROD_MONGODB;
  }
};
