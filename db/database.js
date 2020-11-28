let mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/home";
// process.env.DATABASE_URI;

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
      .then(() => {
        console.log("Database connection successfully");
      })
      .catch((err) => {
        console.log("Database connection error!");
      });
  }
}

module.exports = new Database();
