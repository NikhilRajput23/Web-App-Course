const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const port=process.env.PORT||3000;

// POST route to handle background data
app.post('/background', (req, res) => {
  const message = req.body.message;   // Read JSON data from client
  console.log("Message received:", message);

  // Send response back to client
  res.json({ 
    output: "2 + 2 = 4 ✅",
  
  });
});

app.listen(port, () => {
  console.log('✅ Server running on http://localhost:3000');
});
