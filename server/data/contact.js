

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


app.post('/api/support', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Support Form Submission:', { name, email, message });
    res.status(200).json({ success: true, message: "Your message has been sent!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});