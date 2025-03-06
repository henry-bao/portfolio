import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port, () => {
    if (process.env.NODE_ENV === 'dev') {
        console.log(`App started on port ${port}\nLocal website can be viewed on http://localhost:${port}`);
    }
});
