import mongoose from 'mongoose';
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

const User = mongoose.model('User', userSchema);
export default User;
