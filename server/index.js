const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const routes = require("./routes/index.js");
const path = require("path");

const app = express();
dotenv.config();

app.use((req, res, next) => {
  morgan("dev")(req, res, next);
});
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.static("uploads"));
app.set("port", process.env.PORT || 8080);

app.use("/api", routes);

const server = app.listen(app.get("port"), () => {
  console.log("Hello, my Server");
});
