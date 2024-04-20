import React, { useState } from "react";

const CategoryItem = ({ category, onDelete, onEdit }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedName, setEditedName] = useState(category.name);
  const [image, setImage] = useState(category.image);
  const [editCategorySlug, setEditCategorySlug] = useState(category.slug);
  
  const handleEdit = () => {
    onEdit(category._id, editedName, image, editCategorySlug); // Corrected to use 'image' instead of 'description'
    setShowEditModal(false);
  };

  return (
    <div className="">
      <table className="table table-bordered">
        <tbody>
          <tr className="text-center ">
            <td style={{ width: "25%" }}>{category.image}</td>
            <td style={{ width: "25%" }}>{category.name}</td>
            <td style={{ width: "25%" }}>{category.slug}</td>
            <td style={{ width: "25%" }}>
              <button
                className="btn btn-light"
                onClick={() => setShowEditModal(true)}
              >
                Edit
              </button>
              <button
                className="btn btn-light"
                onClick={() => onDelete(category._id)}
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
              <h5 className="modal-title">Edit Category</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowEditModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Category Image:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Category Name:</label>
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
                    value={editCategorySlug}
                    onChange={(e) => setEditCategorySlug(e.target.value)}
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

export default CategoryItem;
