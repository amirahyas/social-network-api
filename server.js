const express = require('express');
const app = express();
const db = require('./db'); // Import the database connection

// Other app configurations and route setups go here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
