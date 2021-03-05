import Campground from "../models/campground.model.js";

export const getAllCampgrounds = async (req, res) => {
  const campgrounds = await Campground.find({});
  res.send(campgrounds);
};

export const getACampground = async (req, res) => {
  const { id } = req.params;
  const camp = await Campground.findById(id);
  res.send(camp);
};

export const addACampground = async (req, res) => {
  const campground = new Campground(req.body);
  await campground.save();
};

export const editACampground = async (req, res) => {
  const { id } = req.params;
  const camp = await Campground.findByIdAndUpdate(id, { ...req.body });
};

export const deleteACampground = async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
};
