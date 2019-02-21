import { Strategy, ExtractJwt } from 'passport-jwt';
import User from '../models/user';
import { SECRET } from './config';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt");
  secretOrKey: SECRET
};

exports default passport => passport.use(
  new Strategy(
    options,
    ({ id }, done) => User.findOne(
      { id },
      (err, user) => done(
        err || null,
        user || false
      )
    )
  )
);
