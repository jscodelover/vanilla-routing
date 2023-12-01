const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "example" directory
app.use('/', express.static(path.join(__dirname, '/')));
app.use('*/dist', express.static(path.join(__dirname, 'dist')));

// Serve the index.html file for all routes
app.get('/*', function (req, res) {
  console.log(path.join(__dirname, '/index.html'));
  res.sendFile(path.join(__dirname, '/index.html'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
