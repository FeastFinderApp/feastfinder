

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


const faqs = [
    { question: "What makes your services unique from other similar platforms?", answer: "Compared to similar platforms, there's less requirements needed to use our services for menu making. Other platforms require a subscription or partnership, and we aim to not hassle restaurant owners with requirements such as those." },
    { question: "Where can we contact you?", answer: "You may contact us via the form provided below." },
];


app.get('/api/faqs', (req, res) => {
    res.json(faqs);
});


app.post('/api/support', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Support Form Submission:', { name, email, message });
    res.status(200).json({ success: true, message: "Your message has been sent!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});