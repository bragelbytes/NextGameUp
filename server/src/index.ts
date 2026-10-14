import "dotenv/config"
import cors from 'cors';
import express from 'express';
import healthRouter from './routes/health.js';
import searchRouter from './routes/search.js';
import usersRouter from "./routes/users.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(healthRouter);
app.use(searchRouter);
app.use(usersRouter);

app.listen(PORT, (error) => {
    if(error) console.log(error);
    console.log(`I'm listening on port ${PORT}`);
});