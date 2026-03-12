import express from 'express';

const healthRouter = express.Router();

healthRouter.get('/health', (req, res) => {
    res.json({ok: true});
});

export default healthRouter;