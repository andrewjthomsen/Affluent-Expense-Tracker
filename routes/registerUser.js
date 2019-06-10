/* eslint-disable arrow-parens */
/* eslint-disable no-console */
const passport = require('passport');
const User = require('../models/user');

module.exports = app => {
  app.post('/registerUser', (req, res, next) => {
    passport.authenticate('register', (err, user, info) => {
      if (err) {
        console.error(err);
      }
      if (info !== undefined) {
        console.error(info.message);
        res.status(403).send(info.message);
      } else {
        // eslint-disable-next-line no-unused-vars
        req.logIn(user, error => {
          console.log(User);
          const data = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            username: user.username,
          };
          console.log(data);
          User.findOne({
            where: {
              username: data.username,
            },
          }).then(user => {
            console.log(user);
            User
              .update({
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
              })
              .then(() => {
                console.log('user created in db');
                res.status(200).send({ message: 'user created' });
              });
          });
        });
      }
    })(req, res, next);
  });
};