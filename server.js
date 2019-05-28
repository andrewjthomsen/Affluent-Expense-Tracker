
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const path = require("path")
const mongoose = require('mongoose');
require("dotenv").config();
const config = require('./routes/api/DB');
const expenseRoute = require('./routes/api/expenseAPI');
const db = process.env.MONGODB_URI || 'mongodb://localhost:27017/expenses'
mongoose.Promise = global.Promise;
mongoose.connect(db, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);
app.use(express.static(path.join(__dirname, "client", "build")))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use("/api", expenseRoute);

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "index.html"));
});
app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});
