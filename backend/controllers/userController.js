// controllers/userController.js

exports.postByGmail = async (req, res) => {
    const reqData = req.body;
    const email = reqData["email"]
    // Handle POST logic, including updating `hasPosted` to `true`
    
    res.json({ isSuccess: true });
};

exports.getByGmail = async (req, res) => {
    const reqData = req.body;
    const email = reqData["email"]
    // Handle POST logic, including updating `hasPosted` to `true`
    
    res.json({ is_allow: false });
};
