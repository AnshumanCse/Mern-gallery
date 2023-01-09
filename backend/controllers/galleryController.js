import GalleryModel from "../models/gallerySchema.js";
import CategoryModel from "../models/categoryModel.js";

export const uploadImage = async (req, res) => {
  const { category } = req.body;
  try {
    if (category) {
      const addImage = GalleryModel({
        name: req.file.filename,
        category: category,
      });

      const saved = await addImage.save();

      if (saved) {
        return res.status(200).json({ message: "File upload successfully" });
      }
    } else {
      return res.status(400).json({ message: "all fields are required" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const addCategory = async (req, res) => {
  const { name } = req.body;

  try {
    if (name) {
      const newCategory = CategoryModel({
        name: name,
      });
      const saved = await newCategory.save();
      if (saved) {
        return res
          .status(200)
          .json({ message: "Category Added Successfully successfully" });
      }
    } else {
      return res.status(400).json({ message: "all fields are required" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const fetchAllCategories = await CategoryModel.find({});
    return res.status(200).json(fetchAllCategories);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getAllImages = async (req, res) => {
  try {
    const fetchAllImages = await GalleryModel.find({});
    return res.status(200).json(fetchAllImages);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getSingleImage = async (req, res) => {
  const { category } = req.query;

  try {
    if (category) {
      const getCategoryBasedImages = await GalleryModel.find({
        category,
      });
      return res.status(200).json(getCategoryBasedImages);
    } else {
      return res.status(400).json({ message: "All fields are required" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
