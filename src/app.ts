import express from "express";
import { dbConnect } from "./db/connection";
import answerroute from "./routes/answerroute";
import questionroute from "./routes/questionroute"

const app = express();
app.use(express.json());
const PORT = 4000;

app.use("/answers", answerroute);
app.use("/questions", questionroute);

app.get('/', async (req, res) => {
    res.status(200).json({msg: "TS API running..."})
})

dbConnect();

app.listen(PORT, () => {
    console.log(`working on port ${PORT}`)
});