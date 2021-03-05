import express from "express";
import {
  addACampground,
  deleteACampground,
  editACampground,
  getACampground,
  getAllCampgrounds,
} from "../controllers/campgrounds.controller.js";

const router = express.Router();

router.get("/", getAllCampgrounds);

router.post("/", addACampground);

router.get("/:id", getACampground);

router.put("/:id", editACampground);

router.delete("/:id", deleteACampground);

export default router;
