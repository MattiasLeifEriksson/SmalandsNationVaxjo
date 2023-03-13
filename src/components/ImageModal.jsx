// Import necessary modules and components
import React from "react";
import { useState } from "react";
import "./comp.css";

// Define the ImageModal component
const ImageModal = ({ image, onSave, onCancel }) => {
// Define state variables for the form fields
const [title, setTitle] = useState(image.title);
const [description, setDescription] = useState(image.description);

// Handle changes to the title input
const handleTitleChange = (event) => {
setTitle(event.target.value);
};

// Handle changes to the description input
const handleDescriptionChange = (event) => {
setDescription(event.target.value);
};

// Handle form submission
const handleSubmit = (event) => {
event.preventDefault();
onSave({ ...image, title, description });
};

return (
<div className="modal-overlay">
<div className="modal-content">
<h2>Edit Image</h2>
<form onSubmit={handleSubmit}>
<label htmlFor="title">Title:</label>
<input type="text" id="title" value={title} onChange={handleTitleChange} />
<label htmlFor="description">Description:</label>
      <textarea id="description" value={description} onChange={handleDescriptionChange} />

      <div className="modal-buttons">
        <button type="submit" className="btn">Save</button>
        <button type="button" className="btn" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  </div>
</div>
);
};

export default ImageModal;