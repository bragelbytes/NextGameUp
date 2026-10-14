import express from "express";
import pool from "../db.js";

const usersRouter = express.Router();

usersRouter.get('/users/:id', async(req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id < 1){
        return res.status(400).json({error: "User id must be a positive integer"})
    }

    try{
        const result = await pool.query(
            `
            SELECT id, username, created_at
            FROM users
            WHERE id = $1
            `,
            [id],
        );

        if(result.rows.length === 0){
            return res.status(404).json({error: "User not found"});
        }

        return res.json(result.rows[0]);

    } catch(error) {
        console.log(error)
        return res.status(500).json({ok: false})
    }
})

export default usersRouter;