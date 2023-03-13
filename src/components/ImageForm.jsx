// Import necessary modules and components
import React from "react";
import { useState } from "react";
import "./comp.css";

// Define the ImageForm component
const ImageForm = ({ onSubmit, onCancel }) => {
// Define state variables for the form fields
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [imageUrl, setImageUrl] = useState("");

// Handle changes to the title input
const handleTitleChange = (event) => {
setTitle(event.target.value);
};

// Handle changes to the description input
const handleDescriptionChange = (event) => {
setDescription(event.target.value);
};

// Handle changes to the image URL input
const handleImageUrlChange = (event) => {
setImageUrl(event.target.value);
};

// Handle form submission
const handleSubmit = (event) => {
event.preventDefault();
const newImage = { title, description, imageUrl };
onSubmit(newImage);
setTitle("");
setDescription("");
setImageUrl("");
};

return (
<div className="modal-overlay">
<div className="modal-content">
<h2>Add Image</h2>
<form onSubmit={handleSubmit}>
<label htmlFor="title">Title:</label>
<input type="text" id="title" value={title} onChange={handleTitleChange} />
<label htmlFor="description">Description:</label>
      <textarea id="description" value={description} onChange={handleDescriptionChange} />

      <label htmlFor="imageUrl">Image URL:</label>
      <input type="text" id="imageUrl" value={imageUrl} onChange={handleImageUrlChange} />

      <div className="modal-buttons">
        <button type="submit" className="btn">Save</button>
        <button type="button" className="btn" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  </div>
</div>
);
};

export default ImageForm;