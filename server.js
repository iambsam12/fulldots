const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const connect = require("./config/db");
const userRouter = require("./routes/userRoutes");
const newsRoutes = require("./routes/newsRoutes");
require("dotenv").config();
connect();

//app
const app = express();
app.use(bodyparser.json());
app.use("/api", userRouter);
app.use("/api", newsRoutes);

const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`Server is running on port ${port}`));
