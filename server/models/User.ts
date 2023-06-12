const mongoose = import("mongoose");
import { Schema, model } from "mongoose";
import { comment, MoviePoll, userVote } from "./index";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  polls: [MoviePoll.schema],
  comments: [comment],
  votes: [userVote],
});

export const User = model("User", userSchema);
