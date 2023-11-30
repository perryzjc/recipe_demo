import React, { useState } from 'react';
import './RecipeUploadForm.css';



function RecipeUploadForm(user) {
    const [userEmail, setUserEmail] = useState('');
    const [title, setTitle] = useState('');
    const [instructions, setInstructions] = useState('');
    const [image, setImage] = useState(null);
    const maxFileSize = 20 * 1024 * 1024; // 20 MB

    function handleFileChange(e) {
        const file = e.target.files[0];
        if (file) {
            if (file.size > maxFileSize) {
                alert("File size exceeds 20MB");
                return;
            }
            setImage(file);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (!image) {
            console.error('No image selected');
            return;
        }

        const formData = new FormData();
        formData.append('user_email', userEmail);
        formData.append('title', title);
        formData.append('instructions', instructions);
        formData.append('image', image);

        try {
            const response = await fetch('http://localhost:3000/api/recipes', {
                method: 'POST',
                body: formData // No headers here as browser will set the correct 'Content-Type' for FormData
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log('Upload successful', responseData);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    return (
        <div className="recipe-upload-form">
            <div className="upload-label">Import Your Recipe</div>
            <div className="upload-btn-wrapper">
                <button>Upload Image</button>
                <input type="file" name="myfile" onChange={handleFileChange}/>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user-email">User Email:</label>
                <input
                    id="user-email"
                    type="email" // Set type to email for proper validation
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                />

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
