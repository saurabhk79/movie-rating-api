const ratingservice = require("../services/ratingService");

const addReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;
    const ratingData = req.body;

    const rating = await ratingservice.addReview({
      movieId: id,
      userId,
      ...ratingData,
    });

    return res.status(201).json(rating);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllReviews = async (req, res) => {
  try {
    const { id } = req.params;
    const ratings = await ratingservice.getAllReviews(id);

    return res.status(200).json(ratings);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateReview = async (req, res) => {
  try {
    const { id, reviewId } = req.params;
    const { userId } = req.user;

    const updateData = req.body; 

    const updatedRatings = await ratingservice.updateReview(id, reviewId, userId, updateData);

    return res.status(200).json(updatedRatings);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteReview = async (req, res) => {
  try {
    const { id, reviewId } = req.params;
    const { userId } = req.user;

    await ratingservice.deleteReview(id, reviewId, userId);

    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAverageRating = async (req, res) => {
  try {
    const movieId = req.params.id;

    const average = await ratingservice.getAverageRating(movieId);

    return res.status(200).json({average})
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  addReview,
  getAllReviews,
  updateReview,
  deleteReview,
  getAverageRating,
};
