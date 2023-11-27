import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './RecipeUploadForm.css';

function RecipeUploadForm() {
    const [userEmail, setUserEmail] = useState('');
    const [title, setTitle] = useState('');
    const [instructions, setInstructions] = useState('');
    const [image, setImage] = useState(null);

    function handleFileChange(e) {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (!image) {
            console.error('No image selected');
            return;
        }

        const instructionsList = instructions.split('\n')
            .map(line => line.trim())
            .filter(line => line);

        const reader = new FileReader();
        reader.readAsDataURL(image);

        reader.onload = async () => {
            const base64Image = reader.result;
            if (typeof base64Image !== 'string') {
                console.error('FileReader result is not a string');
                return;
            }

            const data = {
                user_email: userEmail,
                title: title,
                instructions: instructionsList,
                image: base64Image
            };

            try {
                const response = await axios.post('http://10.40.134.55:3000/api/recipes', data, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                console.log('Upload successful', response.data);
            } catch (error) {
                console.error('There was a problem with the axios request:', error);
            }
        };

        reader.onerror = () => {
            console.error('Error occurred reading the file:', reader.error);
        };
    }

    return (
        <div className="recipe-upload-form">
            <div className="upload-label">Import Your Recipe</div>
            <div className="upload-btn-wrapper">
                <button>Upload Image</button>
                <input type="file" name="myfile" onChange={handleFileChange} />
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
