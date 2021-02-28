import express from "express";
import Campground from "../models/campground.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const campgrounds = await Campground.find({});
  res.send(campgrounds);
});

router.post("/", async (req, res) => {
  const campground = new Campround(req.body);
  await campground.save();
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const camp = await Campground.findById(id);
  res.send(camp);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const camp = await Campground.findByIdAndUpdate(id, { ...req.body });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
});

export default router;
