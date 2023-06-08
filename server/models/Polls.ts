const mongoose = import("mongoose");
import { Schema, model } from "mongoose";
import { comment } from "./index";

export const movieOption = new Schema({
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
