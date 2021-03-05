import mongoose from "mongoose";
import Campground from "../models/campground.model.js";
import cities from "./cities.js";
import { descriptors, places } from "./seedHelpers.js";

mongoose
  .connect("mongodb://localhost:27017/yelp-camp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("ERRROOOOOORRR");
    console.log(err);
  });

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 30) + 10;
    const camp = new Campground({
      title: `${sample(descriptors)} ${sample(places)}`,
      location: `${cities[random].city}, ${cities[random].state}`,
      image: "https://source.unsplash.com/collection/483251",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a pharetra magna, sit amet hendrerit ex. Cras maximus, erat quis lobortis mollis, lacus dui aliquet sem, eget varius leo ex pellentesque justo. Suspendisse interdum ornare metus.",
      price,
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
