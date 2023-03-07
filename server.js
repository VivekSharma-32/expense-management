const express = require("express");
const cors = require("cors");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
// const bodyParser = require("body-parser");

// config
dotenv.config();

// dbcall
connectDB();

//rest object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes
//user routes
app.use("/api/v1/users", require("./src/routes/userRoute"));

// transaction routes
app.use("/api/v1/transactions", require("./src/routes/transactionRoutes"));
//PORT
const port = 8000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`.bgMagenta.white);
});
