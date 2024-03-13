const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    director: {
      type: String,
      required: true,
    },
    genres: {
      type: [String],
    },
    releaseYear: {
      type: String,
      required:true,
    },
    description : {
      type : String,
      required : true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamp: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
