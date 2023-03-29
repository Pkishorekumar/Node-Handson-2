const express = require('express');
const app = express();


app.get('/api', (req, res) => {
  res.send('THIS IS API PAGE');
});


app.get('/main', (req, res) => {
  res.send('THIS IS MAIN PAGE');
});


app.get('/', (req, res) => {
  res.send('Express is a fast, unopinionated, minimalist web framework for Node.js. It provides a robust set of features for building single-page, multi-page, and hybrid web applications.');
});


app.listen(8081, () => {
    console.log(`Server listening at 8081....... `);
   
app.get('/', (req, res) => {
    res.send('Express is a fast, unopinionated, minimalist web framework for Node.js. It provides a robust set of features for building single-page, multi-page, and hybrid web applications.');
  });
  
});
