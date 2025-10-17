const express = require('express');
const bodyParser=require('body-parser');
const app = express();

app.use(bodyParser.json({}));
app.get('/', (req, res) => {
  console.log(req.headers);
  res.send({ msg:"123"
  })
  
});

app.listen(3000, () => {
  console.log('✅ Server running on');
});
  