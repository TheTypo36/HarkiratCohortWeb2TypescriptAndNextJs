import mongoose, { model } from "mongoose";

const linkSchema = new mongoose.Schema(
  {
    hash: {
      type: String,
      unique: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const Link = model("Link", linkSchema);
