import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddCategory from "./pages/AddCategory";
import AddImage from "./pages/AddImage";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/add-image" element={<AddImage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
