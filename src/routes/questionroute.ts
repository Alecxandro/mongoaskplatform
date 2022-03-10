import { Question } from "../models/Questions";
import express from "express";

const router = express.Router();

//Get All Questions
router.get("/", async (req, res) => {
  try {
      const questions = await Question.find();
      res.status(200).json(questions);
  } catch (error) {
      res.status(500).json({error})
  }
});

//Get One Question
router.get('/:question', async (req, res) => {
  const questionid = req.params.question;

  try {
    const question = await Question.find({_id: questionid});
    if (!question) res.status(404).json({message: "Question not found."});
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({message: `Error details here: ${error}`});
  }
})

//Save a new question
router.post("/newquestion", async (req, res) => {
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

//Update a question




export default router;
