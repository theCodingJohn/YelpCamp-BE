import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import campgroundRoutes from "./routes/campgrounds.js";

mongoose
  .connect("mongodb://localhost:27017/yelp-camp", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("ERRROOOOOORRR");
    console.log(err);
  });

const app = express();
const PORT = process.env.PORT | 8000;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/campgrounds", campgroundRoutes);

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
});
