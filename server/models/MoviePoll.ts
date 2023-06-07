const mongoose = import("mongoose");
import { Schema, model } from "mongoose";

const movieOption = new Schema({
  title: {
    type: String,
    required: true,
  },
  summary: { type: String },
  stars: { type: String },
  imdb_id: { type: String, required: true },
  rating: { type: String },
  trailer: { type: String },
  wikipedia: { type: String },
  image: { type: String },
  genres: [{ type: String }],
  votes: Number,
  rank_votes: [Number],
});

const movieComment = new Schema({
  user_id: { type: String, required: true },
  username: { type: String, required: true },
  option: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
});

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
  comments: [movieComment],
});

export const MoviePoll = model("MoviePoll", moviePollSchema);
