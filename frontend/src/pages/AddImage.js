import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories, postNewImag } from "../redux/features/gallerSlice";
import { useNavigate } from "react-router-dom";

const AddImage = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate()

  const [file, SetFile] = useState();
  const [category, SetCategory] = useState();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const formData = new FormData();
  formData.append("image",file)
  formData.append("category",category)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postNewImag(formData))
    navigate("/")

  }

  const { images, categories } = useSelector((state) => state.gallery);
  return (
    <div>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Image:</label>
              <input
                type="file"
                placeholder="Chooose Image"
                className=""
                onChange={(e) => SetFile(e.target.files[0])}
              />
            </div>

            <div className="">
              <label>Category:</label>
              <select onChange={(e) => SetCategory(e.target.value)}>
                <option value="">Please Select</option>
                {categories &&
                  categories.map((item) => {
                    return <option value={item._id}>{item.name}</option>;
                  })}
              </select>
            </div>

            <button type="submit">Upload</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddImage;
