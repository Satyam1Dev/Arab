// CategoryList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../component/header";
import { Link } from "react-router-dom";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState("");
  const [categorySlug, setCategorySlug] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://arab-server.onrender.com/api/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleImageChange = (e) => {
    setCategoryImage(e.target.value);
  };

  const handleSlugChange = (e) => {
    setCategorySlug(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://arab-server.onrender.com/api/categories",
        { name: categoryName, image: categoryImage, slug: categorySlug }
      );

      if (response.status === 201) {
        const updatedCategories = await axios.get(
          "https://arab-server.onrender.com/api/categories"
        );
        setCategories(updatedCategories.data);
        setShowModal(false);
        setCategoryName("");
        setCategoryImage("");
        setCategorySlug("");
        window.alert("New category added successfully!");
      }
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  const handleDelete = async (categoryId) => {
    try {
      const response = await axios.delete(
        `https://arab-server.onrender.com/api/categories/${categoryId}`
      );

      if (response.status === 200) {
        const updatedCategories = await axios.get(
          "https://arab-server.onrender.com/api/categories"
        );
        setCategories(updatedCategories.data);
        window.alert("Category deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleEdit = async (
    categoryId,
    editedName,
    editedImage,
    editedSlug
  ) => {
    try {
      console.log("Editing category with ID:", categoryId);
      console.log("Edited name:", editedName);
      console.log("Edited image:", editedImage);
      console.log("Edited slug:", editedSlug);

      const response = await axios.put(
        `https://arab-server.onrender.com/api/categories/${categoryId}`,
        { name: editedName, image: editedImage, slug: editedSlug }
      );

      if (response.status === 200) {
        const updatedCategories = await axios.get(
          "https://arab-server.onrender.com/api/categories"
        );
        setCategories(updatedCategories.data);
        window.alert("Category updated successfully!");
      }
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };


  return (
    <div className="container">
      <Header />
      <div className="d-flex mt-5">
        <button
          className="btn btn-outline-primary mt-2 mb-4"
          style={{ width: "100%" }}
        >
          <Link className="link" to="/products">
            Products
          </Link>
        </button>
        <button
          className="btn btn-outline-primary mt-2 mb-4"
          style={{ width: "100%" }}
        >
          <Link className="link" to="/categories">
            Categories
          </Link>
        </button>
      </div>
      <button
        className="btn btn-outline-primary mt-2 mb-4"
        onClick={() => setShowModal(true)}
      >
        Add Category
      </button>
      
      <table className="table">
        <thead>
          <tr className="text-center">
            <th style={{ width: "25%" }}>Image</th>
            <th style={{ width: "25%" }}>Name</th>
            <th style={{ width: "25%" }}>Slug</th>
            <th style={{ width: "25%" }}>Action</th>
          </tr>
        </thead>
      </table>
      {categories.map((category, index) => (
        <CategoryItem
          key={index}
          category={category}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}

      {/* Modal */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Category</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            
            <div className="modal-body">

              <form onSubmit={handleSubmit}>
              <div className="mb-3">
                  <label className="form-label">Category Image:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={categoryImage}
                    onChange={handleImageChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Category Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={categoryName}
                    onChange={handleNameChange}
                    required
                  />
                </div>
                

                <div className="mb-3">
                  <label className="form-label">Slug:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={categorySlug}
                    onChange={handleSlugChange}
                    required
                  />
                </div>
                <button type="submit" className="btn  btn-outline-primary">
                  Add Category
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
