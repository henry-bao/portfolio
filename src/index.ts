import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { promises as fs } from 'fs';

const app = express();

app.get('/', async (_req, res) => {
    const html = await fs.readFile('public/index.html');
    console.log(html);
    res.type('html').send(html);
});

app.get('css/index.css', async (_req, res) => {
    const css = await fs.readFile('public/css/style.css');
    res.type('css').send(css);
});

app.get('script/script.js', async (_req, res) => {
    const js = await fs.readFile('public/script/index.js');
    res.type('js').send(js);
});

app.listen('3000', () => {
    console.log('Website can be viewed on https://localhost:3000');
});
