const router = require("express").Router();
const moviecontroller = require("../controllers/movieController");
const ratingcontroller = require("../controllers/ratingController");
const authenticate = require("../middleware/authenticateToken");

router.get("/", moviecontroller.getAllMovies);
router.post("/", authenticate, moviecontroller.addMovie);
router.get("/:id", authenticate, moviecontroller.getMovieById);
router.put("/:id", authenticate, moviecontroller.updateMovie);
router.delete("/:id", authenticate, moviecontroller.deleteMovie);

/****************************** Ratings routes ********************************/

router.get("/:id/reviews", ratingcontroller.getAllReviews);

router.post("/:id/reviews", authenticate, ratingcontroller.addReview);
router.put(
  "/:id/reviews/:reviewId",
  authenticate,
  ratingcontroller.updateReview
);
router.delete(
  "/:id/reviews/:reviewId",
  authenticate,
  ratingcontroller.deleteReview
);

router.get("/:id/averageRating", ratingcontroller.getAverageRating);

module.exports = router;
