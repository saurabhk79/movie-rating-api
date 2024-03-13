const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");

const authrouter = require("./routes/authRoutes");
const movierouter = require("./routes/movieRoutes");

require("dotenv").config({ path: "src/.env" });

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected gracefully!!"))
  .catch((err) => console.error(err));
  
app.use(express.json());
app.use(cors())

app.use("/api/users",authrouter);
app.use("/api/movies",movierouter);

app.get("/", (req, res) => {
  res.send("Welcome to backend!!");
});

app.listen(PORT, () => {
  console.log("Running on http://localhost:" + PORT);
});


// MONGODB_URI=mongodb+srv://saurabh-from-task-management:task-management@cluster0.zzf0lgm.mongodb.net/taskManager?retryWrites=true&w=majority&appName=Cluster0