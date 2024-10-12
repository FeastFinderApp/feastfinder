const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // To handle JSON data

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const restos = require('./data/restos');
app.get('/:resto/products', (req, res) => {
    
    const restoName = req.params.resto;
    const resto = restos.find(p => p.name === restoName);
  
    if (!resto) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    else{
        const restoProducts = require('./data/' + restoName);
        res.json(restoProducts);
    }
    
  });