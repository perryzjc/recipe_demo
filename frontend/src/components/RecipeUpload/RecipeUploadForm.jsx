import React, { useState } from 'react';
import './RecipeUploadForm.css';

function RecipeUploadForm() {
    const [title, setTitle] = useState('');
    const [instructions, setInstructions] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would handle the form submission,
        // including file upload which you can implement
        // by sending a POST request to your backend server
    };

    return (
        <div className="recipe-upload-form">
            <div className="upload-label">Import Your Recipe</div>
            <div className="upload-btn-wrapper">
                <button>Upload Image</button>
                <input type="file" name="myfile" onChange={(e) => setImage(e.target.files[0])} />
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Recipe Title:</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <label htmlFor="instructions">Instructions:</label>
                <textarea
                    id="instructions"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    required
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default RecipeUploadForm;
