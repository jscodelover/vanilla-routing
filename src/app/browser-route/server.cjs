const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files first
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname))); // root-level static files like index.html, style.css

// Catch-all: serve index.html for all unmatched routes (SPA fallback)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
