import { Question } from "../models/Questions";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
      const questions = await Question.find();
      res.status(200).json(questions);
  } catch (error) {
      res.status(500).json({error})
  }
});

router.post("/auth/newquestion", async (req, res) => {
  const { title, description } = await req.body;

  if (!title || !description) {
    res.status(422).json({ msg: "All fields required!" });
  }

  const newQuestion = new Question({ title, description });

  try {
    await newQuestion.save();
    res.status(201).json({ newQuestion });
  } catch (error) {
    res.status(400).json({ error });
  }
});

export default router;
