const mongoose = import("mongoose");
import { Schema, model } from "mongoose";
import { comment, MoviePoll, movieOption } from "./index";

const userVoteSchema = new Schema({
  poll_id: {
    type: String,
    required: true,
  },
  option: movieOption,
});

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  polls: [MoviePoll.schema],
  comments: [comment],
  votes: [userVoteSchema],
});

export const User = model("User", userSchema);
