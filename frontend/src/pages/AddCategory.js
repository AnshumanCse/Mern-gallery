import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCategory, getAllCategories } from "../redux/features/gallerSlice";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [input, SetInput] = useState({
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCategory(input));
    dispatch(getAllCategories())
    navigate("/add-image")
  };
  return (
    <div>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Category:</label>
              <input
                type="text"
                placeholder="Enter Category"
                className=""
                value={input.name}
                onChange={(e) =>
                  SetInput({ ...input, [e.target.name]: e.target.value })
                }
              />
            </div>
            <button type="submit" className="text-blue rounded-md">
              Add Category
            </button>
          </form>
          <button>Go to Home</button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
