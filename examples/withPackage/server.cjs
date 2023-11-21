const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "example" directory
app.use('/', express.static(path.join('src')));
app.use('*/dist', express.static(path.join('dist')));

// Serve the index.html file for all routes
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
