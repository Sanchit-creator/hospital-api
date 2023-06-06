const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error in connecting with MongoDB"));

db.once("open", () => {
  console.log("successfullly connecting with mongodb");
});

module.exports = db;
