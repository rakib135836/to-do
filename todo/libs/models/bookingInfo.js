import { Schema, models, model } from "mongoose";

// Define schema for book information
const BookInfoSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
});

// Create model for bookInfo collection
const BookInfo = models.BookInfo || model("BookInfo", BookInfoSchema);

export default BookInfo;
