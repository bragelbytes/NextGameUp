import express from 'express';
import pool from '../db.js';

const healthRouter = express.Router();

healthRouter.get('/health', async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");
        
        res.json({
            ok: true,
            timeStamp: result.rows[0].now,
        })
    } catch(error) {
        console.error(error);
        res.status(500).json({ok: false})
    }
});

export default healthRouter;