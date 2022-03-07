import { Answer } from "../models/Answers"
import express from "express";

const router = express.Router();

router.get('/', async (req, res) => {
    res.status(200).json({msg: "Answers!"})
})



export default router;