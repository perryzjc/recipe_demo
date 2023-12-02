import React, { useState } from 'react';
import './RecipeUploadForm.css';
import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import ImportBox from './ImportBox.jsx'



function RecipeUploadForm({user}) {
    const [userEmail, setUserEmail] = useState(user.email);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [instructions, setInstructions] = useState("");
    const [image, setImage] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure()

    function handleConfirm(imgPath) {
        setImage(imgPath);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (!image) {
            alert('Please upload an image first')
            return;
        }
        // if (!userEmail) {
        //     alert('Please login to your email first');
        //     return;
        // }

        // clean instructions text into a list of strings by \n. Clean out empty strings
        const instructionsList = instructions.split('\n').filter((item) => item !== '');
        console.log('instructionsList', instructionsList)

        const formData = new FormData();
        formData.append('email', userEmail);
        formData.append('title', title);
        formData.append('category', category);
        formData.append('instructions', JSON.stringify(instructionsList));
        formData.append('imagePath', image);
        console.log('formData here 123456', formData);

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

    //<input type="file" name="myfile" onChange={handleFileChange}/>
    return (
        <div className="recipe-upload-form">
            <div className="upload-label">Import Your Recipe</div>
            <div className="image-info">{image ? (
                <p>Image Upload successfully! 🎉 - <a href={image} target="_blank" rel="noopener noreferrer">View Image</a></p>
                ) : (
                <p>No Images uploaded yet! 🥲</p>
            )}</div>
            <div className="upload-btn-wrapper">
                <button
                    onClick={onOpen}
                >Upload Image</button>
                <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent bg="none" boxShadow="none">
                        <ImportBox onClose = {onClose} onConfirm={handleConfirm}/>
                    </ModalContent>
                </Modal>
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

                <label htmlFor="category">Recipe Category:</label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="">Select a Category</option>
                    <option value="Appetizer">Appetizer</option>
                    <option value="Soup">Soup</option>
                    <option value="MainCourse">Main Course</option>
                    <option value="Dessert">Dessert</option>
                </select>

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
