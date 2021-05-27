import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
});

export default userSchema;
