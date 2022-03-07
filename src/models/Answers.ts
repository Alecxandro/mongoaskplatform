import * as mongoose from "mongoose";

import { ianswers } from "../interfaces/Answers";

const answersschema = new mongoose.Schema<ianswers>({
  description: { type: String, required: true },
  questionId: { type: Number, required: true },
});

export const Answer = mongoose.model<ianswers>('ianswers',answersschema);
