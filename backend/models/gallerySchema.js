import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
});

const GalleryModel = mongoose.model("gallery", GallerySchema);

export default GalleryModel;
