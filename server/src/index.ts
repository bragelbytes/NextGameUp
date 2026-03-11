import express from 'express';

const app = express();
const port = 3000;

app.get('/health', (req, res) => {
    res.json({ok: true});
});

app.listen(port, () => {
    console.log(`I'm listening on port ${port}`);
});