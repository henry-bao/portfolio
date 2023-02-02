import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 3000;

app.get('/my-image', (req, res) => {
    const reqReferer = req.headers.referer;
    console.log(`Traffic coming from: ${reqReferer}`);
    if (reqReferer && reqReferer.includes('linkedin.com')) {
        res.sendFile('/img/linkedin_portrait.png', { root: 'public' });
    } else {
        res.sendFile('/img/henry.png', { root: 'public' });
    }
});

app.get('/form-submit', (req, res) => {
    if (!process.env.CONTACT_API_URL) {
        res.status(500).send('No contact API URL set');
        return;
    }
    const data = { ...req.query };
    axios.get(`${process.env.CONTACT_API_URL}?value1=${data.value1}&value2=${data.value2}&value3=${data.value3}`);
    res.send('Success');
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`App started on port ${port}\nLocal website can be viewed on http://localhost:${port}`);
});
