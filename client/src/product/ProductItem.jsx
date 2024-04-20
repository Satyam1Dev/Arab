import React, { useState } from "react";

const ProductItem = ({ product, onDelete, onEdit }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedImage, setEditedImage] = useState(product.image);
  const [editedName, setEditedName] = useState(product.name);
  const [editedSlug, setEditedSlug] = useState(product.slug); // Assuming the property is 'slug' not 'Slug'

  const handleEdit = () => {
    onEdit(product._id, editedImage, editedName, editedSlug);
    setShowEditModal(false);
  };

  return (
    <div className="">
      <table className="table">
        <tbody >
        <tr className="text-center">
            <td style={{ width: "25%" }}>{product.image}</td>
            <td style={{ width: "25%" }}>{product.name}</td>
            <td style={{ width: "25%" }}>{product.slug}</td> {/* Assuming it's 'slug', not 'Slug' */}
            <td style={{ width: "25%" }}>
              <button
                className="btn btn-light"
                onClick={() => setShowEditModal(true)}
              >
                Edit
              </button>
              <button
                className="btn btn-light"
                onClick={() => onDelete(product._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Edit Modal */}
      <div
        className={`modal fade ${showEditModal ? "show" : ""}`}
        style={{ display: showEditModal ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Product</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowEditModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Image:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editedImage}
                    onChange={(e) => setEditedImage(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Slug:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editedSlug}
                    onChange={(e) => setEditedSlug(e.target.value)}
                    required
                  />
                </div>
              
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleEdit}
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
