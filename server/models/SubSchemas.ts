const mongoose = import("mongoose");
import { Schema } from "mongoose";

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

export const Comment = new Schema({
  user_id: { type: String, required: true },
  poll_id: { type: String, required: true },
  username: { type: String, required: true },
  option: { type: movieOption, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
});

export const Vote = new Schema({
  poll_id: {
    type: String,
    required: true,
  },
  option: movieOption,
});
