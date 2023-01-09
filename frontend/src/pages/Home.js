import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getAllImages, getSingleImage } from "../redux/features/gallerSlice";

const Home = () => {
  const { images, categories } = useSelector((state) => state.gallery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllImages());
    dispatch(getAllCategories())
  }, [dispatch]);

  const handleCategories = (id) => {
    dispatch(getSingleImage(id))
    dispatch(getAllCategories())

  }

  return (
    <div className="flex justify-around items-center ">
      <div className="grid grid-cols-4 gap-8">
        <div>
          <button
            className="bg-red rounded-2xl"
            onClick={() => dispatch(getAllImages())}
          >
            All
          </button>

          {categories &&
            categories.map((item) => {
              return <button className="" onClick={() => handleCategories(item._id)}>{item.name}</button>;
            })}
        </div>

        <br />
        {images &&
          images.map((item) => {
            return (
              <div className="gap-4 mt-3  shadow-2xl">
                <img
                  src={`http://localhost:8000/${item.name}`}
                  alt="im"
                  className="w-[300px] h-[300px]"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
