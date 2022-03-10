import * as mongoose from "mongoose";

import { iusers } from "../interfaces/iUser";

const userschema = new mongoose.Schema<iusers>({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true}
});

export const User = mongoose.model<iusers>('iusers',userschema);