import mongoose from 'mongoose';
import * as argon2 from 'argon2';

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullName: String,
    email: String,
    password: String,
    deletedAt: Date,
    isActive: Boolean,
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await argon2.hash(this.password);
  }
});

const User = mongoose.model('User', userSchema);
export default User;
