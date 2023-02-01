

module.exports = class Database {
  #collection;
  Database(collection) {
    this.collection = collection;
  }

  // Connect to database
  static connectdb() {
    connectToDb((err) => {
      if (!err) {
        console.log("Database Connection Established");
      } else {
        console.log(err, "\n Database Connection Unsucessful");
        throw(console.error());
      }
    })
    return getDb();

  }
};
