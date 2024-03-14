const router = require("express").Router();
const moviecontroller = require("../controllers/movieController");
const ratingcontroller = require("../controllers/ratingController");
const authenticate = require("../middleware/authenticateToken");

router.get("/", moviecontroller.getAllMovies);
router.post("/", authenticate, moviecontroller.addMovie);
router.get("/:id", authenticate, moviecontroller.getMovieById);
router.put("/:id", authenticate, moviecontroller.updateMovie);
router.delete("/:id", authenticate, moviecontroller.deleteMovie);

router.post("/:id/reviews", authenticate, ratingcontroller.addReview)

module.exports = router;
