const ratingservice = require("../services/ratingService");

const addReview = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user.userId;

  try {
    const ratingData = req.body;

    const rating = await ratingservice.addReview(id, userId, ratingData);

    return res.status(201).json(rating);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { addReview };
