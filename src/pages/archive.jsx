import React from "react";
import { getImages } from "../API/imageAPI";
import { useEffect, useState } from "react";

import ImageForm from "../components/ImageForm";
import ImageModal from "../components/ImageModal";

const Archive = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [imageArray, setImageArray] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const login = true;
 let tempArray = [];
  //useEffect(() => {
    //if (imageArray.length === 0) {
   
      // getImages().then((result) => setImageArray(result));
     for(let i = 0; i < 14; i++) {
      let image = {title: "hej", description: "hejaj", id: i, url: "https://i.imgur.com/mwvRbJj.jpeg"}
      tempArray.push(image);
    }//}
    useState(() => {
      setImageArray(tempArray);
    }, []);
  //}, [imageArray]);

  const handleImageClick = (image) => {
    setFullscreen(true);
    setCurrentImage(image);
  };

  const handleFormSubmit = (newImage) => {
    setImageArray([...imageArray, newImage]);
    setShowForm(false);
  };

  const handleRemoveImage = (imageId) => {
    const updatedArray = imageArray.filter((image) => image.id !== imageId);
    setImageArray(updatedArray);
  };

  const handleEditImage = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleModalSave = (updatedImage) => {
    const updatedArray = imageArray.map((image) =>
      image.id === updatedImage.id ? updatedImage : image
    );
    setImageArray(updatedArray);
    setShowModal(false);
  };

  return (
    <div className="row">
      <h1>Image archive</h1>
      {login && (
        <div className="button-group">
          <button className="btn" onClick={() => setShowForm(true)}>
            Add Image
          </button>
        </div>
      )}
      <div className="archive">
        {imageArray.map((image, i) => (
          <div className="ArchiveImage" key={i}>
            <img
              src={"https://i.imgur.com/mwvRbJj.jpeg"}
              onClick={() => handleImageClick(image)}
              alt="archive"
            />
            <label className="imageText">Title: {image.title}</label>
            <label className="imageText">Description: {image.description}</label>
            {login && (
              <div className="button-group">
                <button className="btn" onClick={() => handleEditImage(image)}>
                  Edit
                </button>
                <button className="btn" onClick={() => handleRemoveImage(image.id)}>
                  Remove
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      {fullscreen && (
        <div className="fullscreen-overlay">
          <img
            src={"https://i.imgur.com/mwvRbJj.jpeg"}
            onClick={() => setFullscreen(false)}
            alt="fullscreen"
          />
          <label className="fullscreen-text">Title: {currentImage.title}</label>
          <label className="fullscreen-text">Description: {currentImage.description}</label>
        </div>
      )}
      {showForm && <ImageForm onSubmit={handleFormSubmit} onCancel={() => setShowForm(false)} />}
      {showModal && (
        <ImageModal
          image={selectedImage}
          onSave={handleModalSave}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Archive;