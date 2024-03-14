const Rating = require("../models/Rating");
const Movie = require("../models/Movie");

const addReview = async (ratingData) => {
  try {
    const rating = await new Rating(ratingData);
    await rating.save();

    return rating;
  } catch (error) {
    throw error;
  }
};

const getAllReviews = async (id) => {
  try {
    const ratings = await Rating.find({ movieId: id });

    if (!ratings) throw new Error("Does not exists!");

    return ratings;
  } catch (error) {
    throw error;
  }
};

const updateReview = async (id, reviewId, userId, updateData) => {
  try {
    // const doesExists = await Movie.findById({ id });

    // if (!doesExists) throw new Error("Movie does not exists");
    const updatedRating = await Rating.findOneAndUpdate(
      { _id: reviewId, userId },
      { $set: updateData },
      { new: true }
    );

    // console.log(upd)

    return updatedRating;
  } catch (error) {
    throw error;
  }
};

const deleteReview = async (id, reviewId, userId) => {
  try {
    const doesExists = await Movie.findById(id);

    if (!doesExists) throw new Error("Movie does not exists");

    await Rating.findOneAndDelete({ _id: reviewId, userId });
  } catch (error) {
    throw error;
  }
};

module.exports = { addReview, getAllReviews, updateReview, deleteReview };
