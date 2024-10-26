// src/components/FAQSupport.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FAQSupport.css';

const FAQSupport = () => {
    const [faqs, setFaqs] = useState([]);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [responseMessage, setResponseMessage] = useState('');

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const result = await axios.get('http://localhost:5000/api/faqs');
                setFaqs(result.data);
            } catch (error) {
                console.error('Error fetching FAQs:', error);
            }
        };
        fetchFAQs();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/support', formData);
            setResponseMessage(response.data.message);
            setFormData({ name: '', email: '', message: '' }); // Reset form
        } catch (error) {
            setResponseMessage('There was an error sending your message.');
        }
    };

    return (
        <div>
            <h1>FAQ</h1>
            <ul>
                {faqs.map((faq, index) => (
                    <li key={index}>
                        <strong>{faq.question}</strong><br />
                        {faq.answer}
                    </li>
                ))}
            </ul>

            <h2>Customer Support</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Send</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default FAQSupport;