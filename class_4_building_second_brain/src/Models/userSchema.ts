import mongoose, { model, Document } from "mongoose";
import { Model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  refreshToken: string;

  createdAt: Date;
  isPasswordCorrect(password: string): Promise<Boolean>;
  generateAccessToken(): string;
  generateRefreshToken(): string;
}

const userSchema = new mongoose.Schema<UserDocument>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre<UserDocument>("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

userSchema.methods.isPasswordCorrect = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
      password: this.password,
    },
    process.env.ACCESS_TOKEN_SECRET as string,
    {
      expiresIn: "1d",
    }
  );
};
userSchema.methods.generateRefreshToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
      password: this.password,
    },
    process.env.REFRESH_TOKEN_SECRET as string,
    {
      expiresIn: "10d",
    }
  );
};

export const User: Model<UserDocument> = model<UserDocument>(
  "User",
  userSchema
);
