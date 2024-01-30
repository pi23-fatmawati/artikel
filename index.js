const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Import middlewares
const { errorHandler } = require("./middleware");

// Import routes
const articleRoutes = require("./routes/articleRoutes");

// Use middlewares
app.use(express.json());

// Use routes
app.use("/", articleRoutes);

// Use error handler middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
