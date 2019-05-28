const db = require("../models");

module.exports = {
    // Find all users
    findAllUsers: function(req, res) {
        db.User
        // TO DO: fill in code for finding all users
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    // Find a specific user
    findUserByID: function(req, res) {
        db.User
        // TO DO: fill in code for finding a specific user
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    // Create a new user
    create: function(req, res) {
        db.User
        // TO DO: fill in code for creating a new user
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    // Update a user's info
    update: function(req, res) {
        db.User
        // TO DO: fill in code for updating user info
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    // Permanently delete user
    delete: function(req, res) {
        db.User
        // TO DO: fill in code for deleting a user
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

};