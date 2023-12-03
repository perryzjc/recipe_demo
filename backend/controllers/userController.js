const client = require('../config/db'); // Import the MongoDB client

exports.postByGmail = async (req, res) => {
    try {
        const { email } = req.body;

        console.log(`[Post email] Request Email: ${email}`);
        const db = client.db("RecipeBlog"); // Using "RecipeBlog" as the database name
        const usersCollection = db.collection("users");

        // Check if the user already exists
        const existingUser = await usersCollection.findOne({ userEmail: email });
        //const existingUser = {"userEmail": "123@gmail.com"};
        if (existingUser) {
            // Update user's data if they already exist
            console.log(`Email: ${email} has existed in DB!`);
            res.json({ isSuccess: false });
        } else {
            // Create a new user if they don't exist
            console.log(`Create User for Email: ${email}`);
            await usersCollection.insertOne({ userEmail: email, permision: true });
            //res.json({ isSuccess: true });
        }
    } catch (error) {
        console.error("Error in postByGmail:", error);
        res.status(500).send("Error processing request");
    } 
};

exports.getByGmail = async (req, res) => {
    try {
        const { email } = req.body; // Assuming email is passed as a query parameter
        const db = client.db("RecipeBlog"); // Using "RecipeBlog" as the database name
        const usersCollection = db.collection("users");
        console.log(req);
        console.log(`Request Email: ${email}`);

        const user = await usersCollection.findOne({ userEmail: email });
        console.log(`User: ${JSON.stringify(user)}`);
        if (user) {
            console.log(`User Email: ${email} permisson is: ${user["permision"]}`);
            res.json({ isAllow: user["permision"] || false });
            //res.json({ isAllow: true });
        } else {
            console.log(`User Email: ${email} Not found!`);
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.error("Error in getByGmail:", error);
        res.status(500).send("Error processing request");
    } 
};


// // controllers/userController.js

// exports.postByGmail = async (req, res) => {
//     const reqData = req.body;
//     const email = reqData["email"]
//     // Handle POST logic, including updating `hasPosted` to `true`
    
//     res.json({ isSuccess: true });
// };

// exports.getByGmail = async (req, res) => {
//     const reqData = req.body;
//     const email = reqData["email"]
//     // Handle POST logic, including updating `hasPosted` to `true`
    
//     res.json({ isAllow: false });
// };


