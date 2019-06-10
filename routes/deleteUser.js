const passport = require('passport');
const User = require('../models/user');

module.exports = (app) => {
    app.delete('/deleteUser', (req, res, next) => {
      passport.authenticate('jwt', { session: false }, (err, User, info) => {
        if (err) {
          console.error(err);
        }
        if (info !== undefined) {
          console.error(info.message);
          res.status(403).send(info.message);
        } else {
          User.destroy({
            where: {
              username: req.query.username,
            },
          })
            .then((UserInfo) => {
              if (UserInfo === 1) {
                console.log('user deleted from db');
                res.status(200).send('user deleted from db');
              } else {
                console.error('user not found in db');
                res.status(404).send('no user with that username to delete');
              }
            })
            .catch((error) => {
              console.error('problem communicating with db');
              res.status(500).send(error);
            });
        }
      })(req, res, next);
    });
  };