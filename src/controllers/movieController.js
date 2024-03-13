const movieservice = require("../services/movieService");

const addMovie = async (req, res) => {
  try {
    const { title, description, director, genres, releaseYear } = req.body;
    const userId = req.user.userId;
    const movie = await movieservice.createMovie({
      title,
      description,
      director,
      genres,
      releaseYear,
      userId,
    });

    return res.status(201).json(movie);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

const getAllMovies = async (req, res) => {
  const {genres, releaseYear, director} = req.query;
  try {
    const tasks = await movieservice.getAllMovies(genres, releaseYear, director);

    return res.status(200).json(tasks);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

const getMovieById = async (req, res) => {
  const { id } = req.params;

  try {
    const userId = req.user.userId;
    const movie = await movieservice.getMovieById(id, userId);

    if (!movie) return res.status(404).json({ message: "Not found." });

    return res.status(200).json(movie);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

const updateMovie = async (req, res) => {
  const { id } = req.params;

  try {
    const userId = req.user.userId;
    const updateData = req.body;

    const movie = await movieservice.updateMovie(id, userId, updateData);

    if (!movie) return res.status(404).json({ message: "Not found." });

    return res.status(200).json(movie);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;

  try {
    const userId = req.user.userId;

    const movie = await movieservice.deleteMovie(id, userId);

    if (!movie) return res.status(404).json({ message: "Not found." });

    return res.sendStatus(204);
  } catch (error) {
    return res.json({ message: error.message });
  }
};
module.exports = { addMovie, getAllMovies, getMovieById, updateMovie, deleteMovie };
