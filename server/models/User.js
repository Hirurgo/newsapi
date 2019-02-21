import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.pre('save', next => {
  const user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, (error, salt) => {
      if (error) return next(error);
      bcrypt.hash(
        user.password,
        salt,
        (error, hash) => {
          if (error) return next(error);
          user.password = hash;
        }
      );
    });
  }
  return next();
});

UserSchema.methods.comparePassword = (password, callback) => 
  bcrypt.compare(
    password,
    this.password,
    (error, isMatch) => callback(error || null, isMatch);
  );

export default mongoose.model('User', UserSchema);
