const express = require("express");
const app = express();
const sequelize = require("./db");
require("dotenv").config();

app.use(express.json());
const schoolRoutes = require("./routes/schoolRoutes");
app.use("/schools", schoolRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
