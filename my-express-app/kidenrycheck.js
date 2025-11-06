const express = require('express');
const app = express();

// Validator: require BOTH username and password to match
function usernameValidator(username, password) {
    if (username !== "harkirat" || password !== "pass") {
        // if either one is wrong -> invalid
        return false;
    }
    return true;
}

// Validator: only allow kidneyId 1 or 2
function kidneyValidator(kidneyId) {
    // ensure kidneyId is a number
    const id = Number(kidneyId);
    if (id !== 1 && id !== 2) {
        return false;
    }
    return true;
}

app.get('/health-checkup', function (req, res) {
    const username = req.query.username;
    const password = req.query.password;
    const kidneyId = req.query.kidneyId;

    if (!usernameValidator(username, password)) {
        return res.status(403).json({ msg: "User doesn't exist" });
    }

    if (!kidneyValidator(kidneyId)) {
        return res.status(411).json({ msg: "Wrong inputs" });
    }

    // do something with kidney here...
    res.send("Your heart is healthy");
});

app.put('/replace-kidney', function (req, res) {
    // choose a single source for credentials — here we use headers
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (!usernameValidator(username, password)) {
        return res.status(403).json({ msg: "User doesn't exist" });
    }

    if (!kidneyValidator(kidneyId)) {
        return res.status(411).json({ msg: "Wrong inputs" });
    }

    // kidney replacement logic here...
    res.send("Kidney replacement processed");
});

app.listen(3000, () => console.log('Server running on 3000'));
