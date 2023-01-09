import express from "express";
const router = express.Router();
import {
  addCategory,
  getAllCategories,
  getAllImages,
  getSingleImage,
  uploadImage,
} from "../controllers/galleryController.js";
import upload from "../controllers/imageuploader.js";

router.post("/upload/image", upload.single("image"), uploadImage); // upload

router.post("/add/category", addCategory);
router.get("/get/categories", getAllCategories); // get all doc

router.get("/get/images", getAllImages);
router.get("/get/singleimage", getSingleImage);

export default router;
