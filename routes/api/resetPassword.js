/* eslint-disable no-console */
/* eslint-disable max-len */
import Sequelize from 'sequelize';
import User from '../../models/user';


module.exports = (app) => {
  app.get('/reset', (req, res) => {
    User.findOne({
      where: {
        resetPasswordToken: req.query.resetPasswordToken,
        resetPasswordExpires: {
          $gt: Date.now(),
        },
      },
    }).then((User) => {
      if (User == null) {
        console.error('password reset link is invalid or has expired');
        res.status(403).send('password reset link is invalid or has expired');
      } else {
        res.status(200).send({
          username: User.username,
          message: 'password reset link a-ok',
        });
      }
    });
  });
};