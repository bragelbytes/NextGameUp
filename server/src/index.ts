import cors from 'cors';
import express from 'express';
import healthRouter from './routes/health.js';
import searchRouter from './routes/search.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(healthRouter);
app.use(searchRouter);

app.listen(PORT, (error) => {
    if(error) console.log(error);
    console.log(`I'm listening on port ${PORT}`);
});