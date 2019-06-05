/* eslint-disable no-console */
import passport from 'passport';
import bcrypt from 'bcrypt';
import User from '../../models/user';

const BCRYPT_SALT_ROUNDS = 12;
module.exports = (app) => {
  app.put('/updatePassword', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) {
        console.error(err);
      }
      if (info !== undefined) {
        console.error(info.message);
        res.status(403).send(info.message);
      } else {
        User.findOne({
          where: {
            username: req.body.username,
          },
        }).then((UserInfo) => {
          if (UserInfo != null) {
            console.log('user found in db');
            bcrypt
              .hash(req.body.password, BCRYPT_SALT_ROUNDS)
              .then((hashedPassword) => {
                UserInfo.update({
                  password: hashedPassword,
                });
              })
              .then(() => {
                console.log('password updated');
                res
                  .status(200)
                  .send({ auth: true, message: 'password updated' });
              });
          } else {
            console.error('no user exists in db to update');
            res.status(404).json('no user exists in db to update');
          }
        });
      }
    })(req, res, next);
  });
};