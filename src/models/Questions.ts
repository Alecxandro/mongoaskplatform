import * as mongoose from "mongoose";

import { iquestions } from "../interfaces/Questions";

const questionschema = new mongoose.Schema<iquestions>({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export const Question = mongoose.model<iquestions>('iquestions',questionschema);
