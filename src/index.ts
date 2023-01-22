import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mime from 'mime-types';

const app = express();

app.use(async (req, res) => {
    const reqFileName = req.path === '/' ? 'index.html' : req.path;
    const contentType = mime.lookup(reqFileName);
    res.contentType(contentType === false ? 'text/plain' : contentType).sendFile(reqFileName, { root: 'public' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App started on port ${port}\nLocal website can be viewed on http://localhost:${port}`);
});
