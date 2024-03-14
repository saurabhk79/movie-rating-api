const Rating = require("../models/Rating");

const addReview = async (id, userId, data) => {
  try {
    const rating = await new Rating(id, userId, ...data);
    await rating.save();

    return rating;
  } catch (error) {
    throw error;
  }
};

module.exports = {addReview};
