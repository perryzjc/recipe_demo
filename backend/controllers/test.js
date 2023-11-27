const express = require('express');
const multer = require('multer');
const app = express();

// Configure Multer
const storage = multer.memoryStorage(); // This will store files in memory
const upload = multer({ storage: storage });

app.post('/api/recipes', upload.single('image'), (req, res) => {
    try {
        // Access form fields
        const userEmail = req.body.user_email;
        const title = req.body.title;
        const instructions = req.body.instructions;

        // Access the file
        const file = req.file;
        const imageBuffer = file.buffer; // The file is stored in memory as a buffer

        // Process and store the data and file here
        // ...

        res.status(200).json({ message: 'Recipe uploaded successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error processing request', error: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});