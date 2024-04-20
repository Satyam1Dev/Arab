import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import Header from "../component/header";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productImage, setProductImage] = useState("");
  const [productName, setProductName] = useState("");
  const [productSlug, setProductSlug] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://arab-server.onrender.com/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.value);
  };

  const handleNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleSlugChange = (e) => {
    setProductSlug(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://arab-server.onrender.com/api/products", {
        image: productImage,
        name: productName,
        slug: productSlug,
      });
      if (response.status === 201) {
        fetchProducts();
        setShowModal(false);
        setProductImage("");
        setProductName("");
        setProductSlug("");
        window.alert("New product added successfully!");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(
        `https://arab-server.onrender.com/api/products/${productId}`
      );
      if (response.status === 200) {
        fetchProducts();
        window.alert("Product deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEdit = async (productId, editedImage, editedName, editedSlug) => {
    try {
      const response = await axios.put(
        `https://arab-server.onrender.com/api/products/${productId}`,
        {
          name: editedName,
          slug: editedSlug,
          price: editedImage,
        }
      );
      if (response.status === 200) {
        fetchProducts();
        window.alert("Product updated successfully!");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleRefresh = async () => {
    setLoading(true);
    await fetchProducts();
    setLoading(false);
  };

  const handleFilterClick = () => {
    setFilterVisible(!filterVisible); // Toggle the visibility of the filter input
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const productName = product.name ? product.name.toLowerCase() : '';
    const productCategory = product.category ? product.category.toLowerCase() : '';
    const searchText = filterText.toLowerCase();
  
    return productName.includes(searchText) || productCategory.includes(searchText);
  });
  


  return (
    <div className="container">
      <Header />
      <div className="d-flex mt-5">
      <button
  className={`btn btn-outline-primary mt-2 mb-4 ${location.pathname === '/products' ? 'active' : ''}`}
  style={{ width: "100%" }}
>
  <Link className="link" to="/products">
    Products
  </Link>
</button>
<button
  className={`btn btn-outline-primary mt-2 mb-4 ${location.pathname === '/categories' ? 'active' : ''}`}
  style={{ width: "100%" }}
>
  <Link className="link" to="/categories">
    Categories
  </Link>
</button>

      </div>
      <div className="d-flex align-items-center justify-content-between mb-3"></div>
      <div className="row">
        <div className="d-flex gap-4 align-items-baseline">
        <button
        className="btn btn-outline-primary mt-2 mb-4"
        onClick={handleFilterClick}
      >
        Filter
      </button>

      {/* Filter Input */}
      {filterVisible && (
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by Product Name"
            value={filterText}
            onChange={handleFilterChange}
          />
        </div>
      )}
          <button
            className="btn btn-outline-primary mt-2 mb-4"
            onClick={handleRefresh}
            disabled={loading}
          >
            {loading ? "Loading..." : "Refresh"}
          </button>
          <button
            className="btn btn-outline-primary mt-2 mb-4"
            onClick={() => setShowModal(true)}
          >
            Add Product
          </button>
        </div>
        <div className="col-md-4"></div>
      </div>
      <table className="table">
        <thead>
          <tr className="text-center">
            <th style={{ width: "25%" }}>Image</th>
            <th style={{ width: "25%" }}>Name</th>
            <th style={{ width: "25%" }}>Slug</th>
            <th style={{ width: "25%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
          {filteredProducts.map((product, index) => (
            <ProductItem
              key={index}
              product={product}
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
              <h5 className="modal-title">Add Product</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Product Image:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={productImage}
                    onChange={handleImageChange}
                    required
                    name="image"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Product Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={productName}
                    onChange={handleNameChange}
                    required
                    name="name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Slug:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={productSlug}
                    onChange={handleSlugChange}
                    required
                    name="slug"
                  />
                </div>
                <button type="submit" className="btn btn-outline-primary">
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
