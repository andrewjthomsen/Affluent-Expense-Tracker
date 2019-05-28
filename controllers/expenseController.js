const express = require('express');
const expenseRoutes = express.Router();

// Require Business model in our routes module
let Express = require('../models/expense');

// Defined store route
// expenseRoutes.route('/add').post(function (req, res) {
//   console.log("Something is working");
  
//   let express = new Express(req.body);
//   express.save()
//     .then(express => {
//       res.status(200).json({'express': 'express in added successfully'});
//     })
//     .catch(err => {
//     res.status(400).send("unable to save to database");
//     });
// });

module.exports = expenseRoutes;