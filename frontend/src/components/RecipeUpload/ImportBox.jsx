// src/ImportBox.js
import React, { useEffect, useState } from 'react';
import './ImportBox.css'; // Import the styles

const ImportBox = ({ onClose, onConfirm }) => {
  const [url, setUrl] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleConfirm = () => {
    // You can perform additional validation or processing here
    if (image !== null && image !== "") {
        // You can perform additional validation or processing here
        console.log('Imported Image:', image);
        onConfirm(image);
        onClose();
      } else {
        // Handle the case where image is null, e.g., show an error message
        setError('Image is null. Please import an image before confirming.');
      }
  };

  const handlePreview = () => {
    setImage(url)
  };

  return (
    <div className="url-box">
      <span className="close-icon" onClick={onClose}>X</span>
      <div className="image-space">
        {image ? (
        <img src={image} alt="Preview" />) : (
        error ? (<p>Please import a valid image first!</p>) : (<h3>Picture will be here!</h3>)
        )}
        
      </div>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={handleUrlChange}
        required
      />
      <div className='button-group'>
        <button className='preview-button' onClick={handlePreview}>Import</button>
        <button className='confirm-button' onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default ImportBox;
