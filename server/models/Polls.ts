const mongoose = import("mongoose");
import { Schema, model } from "mongoose";
import { comment, movieOption } from "./index";

const moviePollSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  user_id: { type: String, required: true },
  username: { type: String, required: true },
  genre: { type: String },
  options: [movieOption],
  comments: [comment],
});

export const MoviePoll = model("MoviePoll", moviePollSchema);
