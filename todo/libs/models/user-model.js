import { Schema, models, model } from "mongoose";

// Define schema for book information
const userInfoSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

// Create model for bookInfo collection
const userInfo = models.userInfo || model("UserInfo", userInfoSchema);

export default userInfo;
