const app = require("./src/app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true },
  console.log("Connected to MongoDB")
);

app.listen(process.env.PORT, () => {
  console.log(`Backend Server is running in port ${process.env.PORT}`);
});
