const mongoose = import("mongoose");
import { Schema } from "mongoose";

export const comment = new Schema({
  user_id: { type: String, required: true },
  poll_id: { type: String, required: true },
  username: { type: String, required: true },
  option: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
});
