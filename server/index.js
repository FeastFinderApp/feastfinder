const express = require('express');
const cors = require('cors');
const connectDB = require('./data/db');
const fs = require('fs'); // Import fs to read files
const app = express();
const PORT = 5000;
const userRoutes = require('./routes/user');

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use('/', userRoutes); // Or use '/api' or something similar

// Restaurant routes
const restos = require('./data/restos');
app.get('/:resto/products', (req, res) => {
  const restoName = req.params.resto;
  const resto = restos.find(p => p.name === restoName);

  if (!resto) {
    return res.status(404).json({ message: 'Restaurant not found' });
  }

  // Use fs to dynamically read the file
  const filePath = `./data/${restoName}.json`;
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error loading restaurant products' });
    }
    const restoProducts = JSON.parse(data);
    res.json(restoProducts);
  });
});

// Connect to MongoDB
connectDB();

// User routes
app.use('/api/cartitems', require('./routes/cartitem'));
app.use('/api/users', require('./routes/user'));


// Listen on the port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
