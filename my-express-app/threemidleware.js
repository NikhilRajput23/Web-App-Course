const express = require("express");
const app = express();

// ----------- User Middleware -----------
function userMiddleware(req, res, next) {
    const username = req.query.username;
    const password = req.query.password;

    if (username != "nikhil" && password != "pass") {
        res.status(403).json({
            msg: "Incorrect inputs",
        });
    } else {
        next(); // goes to next middleware or route
    }
}

// ----------- Kidney Middleware -----------
function kidneyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({
            msg: "Incorrect inputs",
        });
    } else {
        next();
    }
}

// ----------- Routes -----------

// Route 1: health-checkup (checks both user + kidney)
app.get("/health-checkup", userMiddleware, kidneyMiddleware, function (req, res) {
    // do something with kidney here
    res.send("Your heart is healthy");
});

// Route 2: kidney-check (checks both user + kidney)
app.get("/kidney-check", userMiddleware, kidneyMiddleware, function (req, res) {
    // do something with kidney here
    res.send("Your heart is healthy");
});

// Route 3: heart-check (checks only user)
app.get("/heart-check", userMiddleware, function (req, res) {
    // do something with user here
    res.send("Your heart is healthy");
});

app.listen(3000, () => console.log("Server running on port 3000"));
