import React, { useState } from 'react';
import './RecipeUploadForm.css';
import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import ImportBox from './ImportBox.jsx'
import MsgBox from './MsgBox.jsx';
import getContents from "../../utils/getContent.js";



function RecipeUploadForm({user, setContents}) {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [instructions, setInstructions] = useState("");
    const [image, setImage] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: msgIsOpen, onOpen: msgOnOpen, onClose: msgOnClose } = useDisclosure();
    const { isOpen: errorIsOpen, onOpen: errorOnOpen, onClose: errorOnClose } = useDisclosure();

    function handleConfirm(imgPath) {
        setImage(imgPath);
    }

    function clearAll() {
        setTitle('');
        setCategory('');
        setInstructions('');
        setImage(null);
    }

    function reloadContents() {
        async function fetchData() {
            console.log("Loading data...");
            const data = await getContents();
            console.log(data);
            if (data instanceof Uint8Array) {
              // Convert Uint8Array to regular array
              setContents(Array.from(data));
            } else {
              setContents(data);
            }
          }
      
          fetchData().then(() => {
            console.log("[Reload] Data loaded successfully!!!");
          });
    }

    async function handleSubmit(event) {
        
        event.preventDefault();

        if (!image) {
            alert('Please upload an image first')
            return;
        }
        if (!user || !user.email) {
            alert('Please login to your email first');
            return;
        }

        // check user permission
        try {
            console.log(user.email)
            const response = await fetch(import.meta.env.VITE_APP_API_URL + "/users/check", {
              method: "Post",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: user.email }), // No headers here as browser will set the correct 'Content-Type' for FormData
            });
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log("User Permission:", responseData);
            if (!responseData["isAllow"]) {
                errorOnOpen();
                clearAll();
                return;
            }
        } catch (error) {
            console.error("Error:", error.message);
        }

        // clean instructions text into a list of strings by \n. Clean out empty strings
        const instructionsList = instructions.split('\n').filter((item) => item !== '');
        console.log('instructionsList', instructionsList)

        const formData = new FormData();
        formData.append('email', user.email);
        formData.append('title', title);
        formData.append('category', category);
        formData.append('instructions', JSON.stringify(instructionsList));
        formData.append('imagePath', image);
        console.log('Submit Form: ', formData);

        try {
            const response = await fetch(import.meta.env.VITE_APP_API_URL + '/recipes', {
                method: 'POST',
                body: formData // No headers here as browser will set the correct 'Content-Type' for FormData
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log('Upload successful', responseData);
            msgOnOpen();
            clearAll();
            reloadContents();
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

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
                <Modal blockScrollOnMount={false} isOpen={msgIsOpen} onClose={msgOnClose}>
                    <ModalOverlay />
                    <ModalContent bg="none" boxShadow="none">
                        <MsgBox onClose = {msgOnClose} msg="Successfully Uploaded your Recipe! 😋" msgType="none"/>
                    </ModalContent>
                </Modal>
                <Modal blockScrollOnMount={false} isOpen={errorIsOpen} onClose={errorOnClose}>
                    <ModalOverlay />
                    <ModalContent bg="none" boxShadow="none">
                        <MsgBox onClose = {errorOnClose} msg="Sorry you don't have the permission to upload recipe. 🙁" msgType="error"/>
                    </ModalContent>
                </Modal>
            </form>
        </div>
    );
}

export default RecipeUploadForm;
