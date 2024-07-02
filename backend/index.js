const express = require('express');
const app = express();
const port = 5000;

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello, CI-CD working fine');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
