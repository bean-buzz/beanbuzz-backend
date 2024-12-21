const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("../swagger.js");

const expressAsyncErrors = require("express-async-errors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Allow CORS from Vite's frontend
app.use(
  cors({
    origin: [
      "http://127.0.0.1:5173",
      "http://localhost:3000",
      "http://localhost:8080",
      "http://localhost:5173",
      // Replace with the URL of the frontend + backend in development
      //      https://render URL
      //      https://domain URL
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true, // Allow cookies if necessary
  })
);

app.use(express.json());
app.use(helmet());
app.use(mongoSanitize());

// This will allow us to check whether the server is running as expected
app.get("/", (request, response) => {
  try {
    // Reponse when the server is working
    response.json({
      message: "BeanBuzz is up and running!",
    });
  } catch (error) {
    // In case something goes wrong (server issue)
    console.error("Error occurred:", error); // Log the error for debugging
    response.status(500).json({
      message: "Oops! Something went wrong on the server.",

      // TODO: Remove for production
      error: error.message,
    });
  }
});

// Controllers
// User
const userController = require("./controllers/UserController");
app.use("", userController);

// Menu Item
const MenuItemController = require("./controllers/MenuItemController");
app.use("/menu", MenuItemController);

// Order
const OrderController = require("./controllers/OrderController");
app.use("/order", OrderController);

// User Reviews
const reviewRouter = require("./routes/reviewRouter.js");
app.use("/reviews", reviewRouter);

// Serve Swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware.js");
app.use(errorHandlerMiddleware);

module.exports = {
  app,
};
