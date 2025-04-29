import mongoose, { Document, Model, Schema, model } from "mongoose";

export interface TagDocument extends Document {
  name: string;
}

const tagSchema = new Schema<TagDocument>(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Tag: Model<TagDocument> = model<TagDocument>("Tag", tagSchema);
