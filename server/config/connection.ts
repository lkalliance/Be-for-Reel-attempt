const mongoose = require("mongoose");
require("dotenv").config();

const url = `mongodb+srv://lkalliance:${process.env.DB_PASSWORD}@lkalliance.jkjosg0.mongodb.net/be_for_reel_db?retryWrites=true&w=majority`;

export const db = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
