const Movie = require("../models/Movie");

const createMovie = async (movieData) => {
  try {
    const doesMovieExists = await Movie.findOne({ title: movieData.title });
    if (doesMovieExists) throw new Error("Movie exists!");

    const movie = await Movie.create(movieData);

    return movie;
  } catch (error) {
    throw error;
  }
};

const getAllMovies = async (genres = [], releaseYear, director) => {
  try {
    const query = {};
    if (genres.length > 0) {
      query.genres = { $in: genres };
    }
    if (releaseYear) {
      query.releaseYear = releaseYear;
    }
    if (director) {
      query.director = director;
    }

    const movies = await Movie.find({ $and: [query] });

    return movies;
  } catch (error) {
    throw error;
  }
};

const getMovieById = async (id, userId) => {
  try {
    const movie = await Movie.findOne({ userId, _id: id });

    return movie;
  } catch (error) {
    throw error;
  }
};

const updateMovie = async (id, userId, updateData) => {
  try {
    const movie = await Movie.findOneAndUpdate(
      { userId, _id: id },
      { $set: updateData },
      { new: true }
    );

    return movie;
  } catch (error) {
    throw error;
  }
};

const deleteMovie = async (id, userId) => {
  try {
    const movie = await Movie.findOneAndDelete({ userId, _id: id });

    return movie;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
};
