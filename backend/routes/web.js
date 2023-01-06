import express from "express";
const router = express.Router();
import { uploadImage } from "../controllers/galleryController.js";
import upload from "../controllers/imageuploader.js";

router.post('/upload/image',upload.single("image"),uploadImage)         // upload
router.get('/')           // get all doc



export default router;
