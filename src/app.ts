import express from "express";
import { dbConnect } from "./db/connection";
import answerroute from "./routes/answerroute";
import questionroute from "./routes/questionroute"

const app = express();
const PORT = 4000 || process.env.PORT;
app.use(express.json());

app.use("/answers", answerroute);
app.use("/questions", questionroute);

app.get('/', async (req, res) => {
    res.status(200).json({status: `Ask Platform API running at ${PORT}`});
})

dbConnect();

app.listen(PORT, () => {
    console.log(`working on port ${PORT}`)
});