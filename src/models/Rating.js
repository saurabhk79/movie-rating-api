const mongoose = require("mongoose");

const ratingSchema = mongoose.Schema({
  rating: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Movie",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Rating = mongoose.model("rating", ratingSchema);

module.exports = Rating;