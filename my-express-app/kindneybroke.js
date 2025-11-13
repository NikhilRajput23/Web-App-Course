const express = require("express");
const app = express();

// JSON body parse करण्यासाठी
app.use(express.json());

// POST route
app.post("/", function(req, res) {
    const kidneyNumber = parseInt(req.body.kidney);
    console.log(kidneyNumber);
    res.send("OK");
});

// Error handling
app.use(function(err, req, res, next) {
    res.status(500).send("Something broke!");
});

// 🔥 सर्वात महत्वाचा भाग → port वर server चालू करतो
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
